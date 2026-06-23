const {
  deleteAssessment,
  listAssessments,
  requireSpatialAdmin,
  updateAssessmentStatus,
} = require('../../lib/spatial-common');

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => { raw += chunk; });
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : {}); }
      catch (err) { reject(new Error('Invalid JSON body')); }
    });
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return json(res, 200, { ok: true });
  try {
    requireSpatialAdmin(req);
    if (req.method === 'GET') {
      return json(res, 200, { ok: true, assessments: await listAssessments() });
    }
    const data = await readBody(req);
    if (!data.record_id) return json(res, 400, { ok: false, message: 'Missing record_id' });
    if (req.method === 'PATCH') {
      return json(res, 200, { ok: true, assessment: await updateAssessmentStatus(data.record_id, data.status) });
    }
    if (req.method === 'DELETE') {
      return json(res, 200, { ok: true, deleted: await deleteAssessment(data.record_id) });
    }
    return json(res, 405, { ok: false, message: 'Method not allowed' });
  } catch (err) {
    const status = /auth/i.test(err.message) ? 401 : 500;
    console.error(err);
    return json(res, status, { ok: false, message: err.message || 'Spatial admin action failed' });
  }
};
