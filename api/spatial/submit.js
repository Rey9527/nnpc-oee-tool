const MAX_TEXT = 3000;
const {
  airtableConfigured,
  createAssessment,
  sanitizeAssessment,
} = require('../../lib/spatial-common');

function json(res, status, body) {
  const origin = String(process.env.ALLOWED_ORIGIN || '*').split(/[\s,]+/)[0] || '*';
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 50000) reject(new Error('Request body too large'));
    });
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : {}); }
      catch (err) { reject(new Error('Invalid JSON body')); }
    });
    req.on('error', reject);
  });
}

function clean(value, max = 300) {
  return String(value || '').trim().slice(0, max);
}

function line(label, value) {
  return `${label}: ${Array.isArray(value) ? value.join('、') : value || '-'}`;
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return json(res, 200, { ok: true });
  if (req.method !== 'POST') return json(res, 405, { ok: false, message: 'Method not allowed' });

  try {
    const data = await readBody(req);
    if (data.website) return json(res, 200, { ok: true });

    const assessment = sanitizeAssessment(data);
    const { email, company, contact } = assessment;
    let stored = null;
    if (airtableConfigured()) stored = await createAssessment(assessment);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FROM_EMAIL;
    if (!apiKey || !from) {
      if (stored) {
        return json(res, 200, {
          ok: true,
          assessment_id: stored.assessment_id,
          warning: 'Assessment saved, but email service is not configured',
        });
      }
      throw new Error('Email service is not configured');
    }

    const needs = assessment.needs;
    const text = [
      'N/NPC RTLS / Spatial Service Assessment',
      '',
      line('Assessment ID', assessment.assessment_id),
      line('Company', company),
      line('Contact', contact),
      line('Email', email),
      line('Phone', assessment.phone),
      line('Needs', needs),
      line('Scene', assessment.scene),
      line('Stage', assessment.stage),
      line('Sites', assessment.sites),
      line('People / assets', assessment.assets),
      line('Monthly users', assessment.users),
      line('Update frequency', assessment.frequency),
      line('Timeline', assessment.timeline),
      line('Accuracy', assessment.accuracy),
      '',
      line('Notes', clean(assessment.notes, MAX_TEXT)),
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [process.env.SPATIAL_NOTIFY_EMAIL || 'info@nnpc.ai'],
        reply_to: email,
        subject: `[N/NPC RTLS] ${company} 空間服務需求診斷`,
        text,
      }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (stored) {
        console.error(body.message || `Email request failed: ${response.status}`);
        return json(res, 200, {
          ok: true,
          assessment_id: stored.assessment_id,
          warning: 'Assessment saved, but notification email failed',
        });
      }
      throw new Error(body.message || `Email request failed: ${response.status}`);
    }
    return json(res, 200, { ok: true, assessment_id: stored?.assessment_id || assessment.assessment_id });
  } catch (err) {
    console.error(err);
    return json(res, 500, { ok: false, message: err.message || 'Submission failed' });
  }
};
