const MAX_TEXT = 3000;

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

    const email = clean(data.email).toLowerCase();
    const company = clean(data.company);
    const contact = clean(data.contact);
    if (!company || !contact || !email || !email.includes('@')) {
      return json(res, 400, { ok: false, message: 'Missing required contact fields' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FROM_EMAIL;
    if (!apiKey || !from) throw new Error('Email service is not configured');

    const needs = Array.isArray(data.needs) ? data.needs.map((item) => clean(item, 80)).slice(0, 12) : [];
    const text = [
      'N/NPC RTLS / Spatial Service Assessment',
      '',
      line('Company', company),
      line('Contact', contact),
      line('Email', email),
      line('Phone', clean(data.phone)),
      line('Needs', needs),
      line('Scene', clean(data.scene)),
      line('Stage', clean(data.stage)),
      line('Sites', clean(data.sites)),
      line('People / assets', clean(data.assets)),
      line('Monthly users', clean(data.users)),
      line('Update frequency', clean(data.frequency)),
      line('Timeline', clean(data.timeline)),
      line('Accuracy', clean(data.accuracy)),
      '',
      line('Notes', clean(data.notes, MAX_TEXT)),
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
    if (!response.ok) throw new Error(body.message || `Email request failed: ${response.status}`);
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error(err);
    return json(res, 500, { ok: false, message: err.message || 'Submission failed' });
  }
};
