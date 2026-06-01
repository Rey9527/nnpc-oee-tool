const AIRTABLE_API = 'https://api.airtable.com/v0';

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

const FIELD = {
  certificateId: process.env.AIRTABLE_CERT_FIELD_CERTIFICATE_ID || 'Certificate ID',
  recipientName: process.env.AIRTABLE_CERT_FIELD_RECIPIENT_NAME || 'Recipient Name',
  position: process.env.AIRTABLE_CERT_FIELD_POSITION || 'Position',
  program: process.env.AIRTABLE_CERT_FIELD_PROGRAM || 'Program',
  certificateType: process.env.AIRTABLE_CERT_FIELD_CERTIFICATE_TYPE || 'Certificate Type',
  startDate: process.env.AIRTABLE_CERT_FIELD_START_DATE || 'Start Date',
  endDate: process.env.AIRTABLE_CERT_FIELD_END_DATE || 'End Date',
  issueDate: process.env.AIRTABLE_CERT_FIELD_ISSUE_DATE || 'Issue Date',
  status: process.env.AIRTABLE_CERT_FIELD_STATUS || 'Status',
  issuedByName: process.env.AIRTABLE_CERT_FIELD_ISSUED_BY_NAME || 'Issued By Name',
  issuedByTitle: process.env.AIRTABLE_CERT_FIELD_ISSUED_BY_TITLE || 'Issued By Title',
  revokedAt: process.env.AIRTABLE_CERT_FIELD_REVOKED_AT || 'Revoked At',
  revocationReason: process.env.AIRTABLE_CERT_FIELD_REVOCATION_REASON || 'Revocation Reason',
};

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

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function normalizeCertificateId(value) {
  return String(value || '').trim().toUpperCase();
}

function normalizeProgramCode(value) {
  return String(value || 'INT').trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12) || 'INT';
}

function normalizeYear(value) {
  const year = String(value || new Date().getFullYear()).trim();
  if (!/^\d{4}$/.test(year)) throw new Error('Year must be 4 digits');
  return year;
}

function airtableConfigured() {
  return Boolean(process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID);
}

function tableName() {
  return String(process.env.AIRTABLE_CERTIFICATES_TABLE_NAME || 'Certificates').trim();
}

function airtableUrl(path, params) {
  const base = requireEnv('AIRTABLE_BASE_ID').trim();
  const table = encodeURIComponent(tableName());
  const url = new URL(`${AIRTABLE_API}/${base}/${table}${path || ''}`);
  Object.entries(params || {}).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
}

async function airtableFetch(path, options, params) {
  const token = requireEnv('AIRTABLE_TOKEN');
  const res = await fetch(airtableUrl(path, params), {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options && options.headers),
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = body.error?.message || body.error?.type || `Airtable request failed: ${res.status}`;
    if (res.status === 404) {
      throw new Error(`Airtable 404: 找不到 Certificates 表。請確認 AIRTABLE_BASE_ID 與 AIRTABLE_CERTIFICATES_TABLE_NAME="${tableName()}"。`);
    }
    if (/invalid permissions|model was not found|required permissions|ids are correct/i.test(detail)) {
      throw new Error(`Airtable 權限或資料表設定錯誤。請確認 Personal Access Token 已加入目前 Base，scope 至少包含 data.records:read 與 data.records:write，且 AIRTABLE_CERTIFICATES_TABLE_NAME="${tableName()}" 完全等於 Airtable 表格名稱。原始錯誤：${detail}`);
    }
    throw new Error(detail);
  }
  return body;
}

function fromAirtable(record) {
  if (!record) return null;
  const fields = record.fields || {};
  return {
    id: record.id,
    certificate_id: fields[FIELD.certificateId] || '',
    recipient_name: fields[FIELD.recipientName] || '',
    position: fields[FIELD.position] || '',
    program: fields[FIELD.program] || '',
    certificate_type: fields[FIELD.certificateType] || '',
    start_date: fields[FIELD.startDate] || '',
    end_date: fields[FIELD.endDate] || '',
    issue_date: fields[FIELD.issueDate] || '',
    status: fields[FIELD.status] || 'Draft',
    issued_by_name: fields[FIELD.issuedByName] || 'Derek Yeh',
    issued_by_title: fields[FIELD.issuedByTitle] || 'Chief Executive Officer',
    revoked_at: fields[FIELD.revokedAt] || '',
    revocation_reason: fields[FIELD.revocationReason] || '',
  };
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

function airtableFields(data) {
  const record = sanitizeCertificateInput(data);
  const fields = {
    [FIELD.certificateId]: record.certificate_id,
    [FIELD.recipientName]: record.recipient_name,
    [FIELD.position]: record.position,
    [FIELD.program]: record.program,
    [FIELD.certificateType]: record.certificate_type,
    [FIELD.status]: record.status,
    [FIELD.issuedByName]: record.issued_by_name,
    [FIELD.issuedByTitle]: record.issued_by_title,
  };
  if (record.start_date) fields[FIELD.startDate] = record.start_date;
  if (record.end_date) fields[FIELD.endDate] = record.end_date;
  if (record.issue_date) fields[FIELD.issueDate] = record.issue_date;
  if (record.revocation_reason) fields[FIELD.revocationReason] = record.revocation_reason;
  return fields;
}

async function findAirtableRecord(certificateId) {
  const id = normalizeCertificateId(certificateId);
  if (!id) return null;
  const escaped = id.replace(/'/g, "\\'");
  const body = await airtableFetch('', { method: 'GET' }, {
    maxRecords: '1',
    filterByFormula: `{${FIELD.certificateId}}='${escaped}'`,
  });
  return body.records && body.records[0];
}

function nextIdFromRecords(records, prefix) {
  let max = 0;
  records.forEach((record) => {
    const id = String(record.fields?.[FIELD.certificateId] || '').toUpperCase();
    const match = id.match(new RegExp(`^${prefix.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}-(\\d{3,})$`));
    if (match) max = Math.max(max, Number(match[1]));
  });
  return `${prefix}-${String(max + 1).padStart(3, '0')}`;
}

async function getNextCertificateId(programCode, year) {
  const code = normalizeProgramCode(programCode);
  const certYear = normalizeYear(year);
  const prefix = `NNPC-${code}-${certYear}`;

  if (!airtableConfigured()) {
    return nextIdFromRecords(
      SAMPLE_CERTIFICATES.map((cert) => ({ fields: { [FIELD.certificateId]: cert.certificate_id } })),
      prefix,
    );
  }

  const body = await airtableFetch('', { method: 'GET' }, {
    pageSize: '100',
    filterByFormula: `LEFT({${FIELD.certificateId}}, ${prefix.length})='${prefix}'`,
  });
  return nextIdFromRecords(body.records || [], prefix);
}

async function getCertificate(certificateId) {
  const id = normalizeCertificateId(certificateId);
  if (!id) return null;

  if (!airtableConfigured()) {
    return publicCertificate(SAMPLE_CERTIFICATES.find((cert) => cert.certificate_id === id));
  }

  const record = await findAirtableRecord(id);
  return publicCertificate(fromAirtable(record));
}

function sanitizeCertificateInput(data) {
  const certificateId = normalizeCertificateId(data.certificate_id);
  if (!certificateId) throw new Error('Missing certificate_id');
  if (!data.recipient_name && !data.name) throw new Error('Missing recipient_name');
  return {
    certificate_id: certificateId,
    recipient_name: String(data.recipient_name || data.name || '').trim(),
    position: String(data.position || '').trim(),
    program: String(data.program || 'NNPC Internship Program').trim(),
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
  const token = String(process.env.CERT_ADMIN_TOKEN || '').trim();
  if (!token) throw new Error('Missing CERT_ADMIN_TOKEN');
  const auth = String(req.headers.authorization || '');
  const provided = auth.replace(/^Bearer\s+/i, '').trim();
  if (provided !== token) throw new Error('Authentication required');
}

async function createCertificate(data) {
  if (!airtableConfigured()) throw new Error('Airtable is not configured');
  const existing = await findAirtableRecord(data.certificate_id);
  if (existing) throw new Error('Certificate ID already exists');
  const body = await airtableFetch('', {
    method: 'POST',
    body: JSON.stringify({ fields: airtableFields(data) }),
  });
  return publicCertificate(fromAirtable(body));
}

async function updateCertificate(certificateId, data) {
  if (!airtableConfigured()) throw new Error('Airtable is not configured');
  const id = normalizeCertificateId(certificateId || data.certificate_id);
  const existing = await findAirtableRecord(id);
  if (!existing) throw new Error('Certificate not found');
  const fields = airtableFields({ ...data, certificate_id: id });
  delete fields[FIELD.certificateId];
  const body = await airtableFetch(`/${existing.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields }),
  });
  return publicCertificate(fromAirtable(body));
}

async function revokeCertificate(certificateId, reason) {
  if (!airtableConfigured()) throw new Error('Airtable is not configured');
  const id = normalizeCertificateId(certificateId);
  const existing = await findAirtableRecord(id);
  if (!existing) throw new Error('Certificate not found');
  const body = await airtableFetch(`/${existing.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      fields: {
        [FIELD.status]: 'Revoked',
        [FIELD.revokedAt]: new Date().toISOString(),
        [FIELD.revocationReason]: String(reason || '').trim(),
      },
    }),
  });
  return publicCertificate(fromAirtable(body));
}

async function deleteDraftCertificate(certificateId) {
  if (!airtableConfigured()) throw new Error('Airtable is not configured');
  const id = normalizeCertificateId(certificateId);
  const existing = await findAirtableRecord(id);
  const certificate = fromAirtable(existing);
  if (!certificate) throw new Error('Certificate not found');
  if (certificate.status !== 'Draft') throw new Error('Only Draft certificates can be deleted');
  await airtableFetch(`/${existing.id}`, { method: 'DELETE' });
  return { certificate_id: id };
}

module.exports = {
  createCertificate,
  deleteDraftCertificate,
  getCertificate,
  getNextCertificateId,
  handleOptions,
  json,
  normalizeCertificateId,
  readBody,
  requireAdmin,
  revokeCertificate,
  updateCertificate,
};
