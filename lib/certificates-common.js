const CERTIFICATE_FIELDS = [
  'id',
  'certificate_id',
  'recipient_name',
  'name',
  'position',
  'program',
  'certificate_type',
  'start_date',
  'end_date',
  'issue_date',
  'status',
  'issued_by_name',
  'issued_by_title',
  'revoked_at',
  'revocation_reason',
  'created_at',
  'updated_at',
];

const SAMPLE_CERTIFICATES = [
  {
    id: 'sample-001',
    certificate_id: 'NNPC-INT-2026-001',
    recipient_name: 'Lin Myat Phyo',
    position: 'Data & AI Operation Analyst Intern',
    program: 'NNPC Internship Program',
    certificate_type: 'internship_completion',
    start_date: '2025-12-05',
    end_date: '2026-06-04',
    issue_date: '2026-06-05',
    status: 'Verified',
    issued_by_name: 'Derek Yeh',
    issued_by_title: 'Chief Executive Officer',
  },
];

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.end(JSON.stringify(body));
}

function handleOptions(req, res) {
  if (req.method === 'OPTIONS') {
    json(res, 200, { ok: true });
    return true;
  }
  return false;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 100000) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function normalizeCertificateId(value) {
  return String(value || '').trim().toUpperCase();
}

function publicCertificate(record) {
  if (!record) return null;
  return {
    id: record.id,
    certificate_id: record.certificate_id,
    recipient_name: record.recipient_name || record.name || '',
    position: record.position || '',
    program: record.program || '',
    certificate_type: record.certificate_type || '',
    start_date: record.start_date || '',
    end_date: record.end_date || '',
    issue_date: record.issue_date || '',
    status: record.status || 'Draft',
    issued_by_name: record.issued_by_name || 'Derek Yeh',
    issued_by_title: record.issued_by_title || 'Chief Executive Officer',
    revoked_at: record.revoked_at || '',
    revocation_reason: record.revocation_reason || '',
  };
}

function supabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function supabaseBaseUrl() {
  return `${String(process.env.SUPABASE_URL || '').replace(/\/$/, '')}/rest/v1/certificates`;
}

async function supabaseFetch(url, options) {
  const res = await fetch(url, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options && options.headers),
    },
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const message = body?.message || body?.error || `Supabase request failed: ${res.status}`;
    throw new Error(message);
  }
  return body;
}

async function getCertificate(certificateId) {
  const id = normalizeCertificateId(certificateId);
  if (!id) return null;

  if (!supabaseConfigured()) {
    return publicCertificate(SAMPLE_CERTIFICATES.find((cert) => cert.certificate_id === id));
  }

  const url = new URL(supabaseBaseUrl());
  url.searchParams.set('certificate_id', `eq.${id}`);
  url.searchParams.set('select', CERTIFICATE_FIELDS.join(','));
  url.searchParams.set('limit', '1');
  const rows = await supabaseFetch(url.toString(), { method: 'GET' });
  return publicCertificate(rows && rows[0]);
}

function sanitizeCertificateInput(data) {
  const certificateId = normalizeCertificateId(data.certificate_id);
  if (!certificateId) throw new Error('Missing certificate_id');
  if (!data.recipient_name && !data.name) throw new Error('Missing recipient_name');
  return {
    certificate_id: certificateId,
    recipient_name: String(data.recipient_name || data.name || '').trim(),
    position: String(data.position || '').trim(),
    program: String(data.program || '').trim(),
    certificate_type: String(data.certificate_type || 'internship_completion').trim(),
    start_date: String(data.start_date || '').trim(),
    end_date: String(data.end_date || '').trim(),
    issue_date: String(data.issue_date || '').trim(),
    status: String(data.status || 'Draft').trim(),
    issued_by_name: String(data.issued_by_name || 'Derek Yeh').trim(),
    issued_by_title: String(data.issued_by_title || 'Chief Executive Officer').trim(),
    revocation_reason: String(data.revocation_reason || '').trim(),
  };
}

function requireAdmin(req) {
  const token = process.env.CERT_ADMIN_TOKEN;
  if (!token) throw new Error('Missing CERT_ADMIN_TOKEN');
  const auth = String(req.headers.authorization || '');
  if (auth !== `Bearer ${token}`) throw new Error('Authentication required');
}

async function createCertificate(data) {
  if (!supabaseConfigured()) throw new Error('Supabase is not configured');
  const record = sanitizeCertificateInput(data);
  const rows = await supabaseFetch(supabaseBaseUrl(), {
    method: 'POST',
    body: JSON.stringify(record),
  });
  return publicCertificate(rows && rows[0]);
}

async function updateCertificate(certificateId, data) {
  if (!supabaseConfigured()) throw new Error('Supabase is not configured');
  const id = normalizeCertificateId(certificateId || data.certificate_id);
  if (!id) throw new Error('Missing certificate_id');
  const patch = { ...sanitizeCertificateInput({ ...data, certificate_id: id }) };
  delete patch.certificate_id;
  const url = new URL(supabaseBaseUrl());
  url.searchParams.set('certificate_id', `eq.${id}`);
  const rows = await supabaseFetch(url.toString(), {
    method: 'PATCH',
    body: JSON.stringify(patch),
  });
  return publicCertificate(rows && rows[0]);
}

async function revokeCertificate(certificateId, reason) {
  if (!supabaseConfigured()) throw new Error('Supabase is not configured');
  const id = normalizeCertificateId(certificateId);
  if (!id) throw new Error('Missing certificate_id');
  const url = new URL(supabaseBaseUrl());
  url.searchParams.set('certificate_id', `eq.${id}`);
  const rows = await supabaseFetch(url.toString(), {
    method: 'PATCH',
    body: JSON.stringify({
      status: 'Revoked',
      revoked_at: new Date().toISOString(),
      revocation_reason: String(reason || '').trim(),
    }),
  });
  return publicCertificate(rows && rows[0]);
}

async function deleteDraftCertificate(certificateId) {
  if (!supabaseConfigured()) throw new Error('Supabase is not configured');
  const id = normalizeCertificateId(certificateId);
  if (!id) throw new Error('Missing certificate_id');
  const url = new URL(supabaseBaseUrl());
  url.searchParams.set('certificate_id', `eq.${id}`);
  url.searchParams.set('status', 'eq.Draft');
  await supabaseFetch(url.toString(), { method: 'DELETE' });
  return { certificate_id: id };
}

module.exports = {
  createCertificate,
  deleteDraftCertificate,
  getCertificate,
  handleOptions,
  json,
  normalizeCertificateId,
  readBody,
  requireAdmin,
  revokeCertificate,
  updateCertificate,
};
