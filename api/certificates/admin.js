const {
  createCertificate,
  deleteDraftCertificate,
  getNextCertificateId,
  handleOptions,
  json,
  readBody,
  revokeCertificate,
  updateCertificate,
} = require('../../lib/certificates-common');

const AIRTABLE_API = 'https://api.airtable.com/v0';

function requireAdminRequest(req) {
  const token = String(process.env.CERT_ADMIN_TOKEN || '').trim();
  if (!token) throw new Error('Missing CERT_ADMIN_TOKEN');
  const auth = String(req.headers.authorization || '');
  const provided = auth.replace(/^Bearer\s+/i, '').trim();
  if (provided !== token) {
    throw new Error(`Authentication required (configured=${Boolean(token)}, configured_length=${token.length}, header_received=${Boolean(auth)}, provided_length=${provided.length})`);
  }
}

async function probeAirtableTable(tableName) {
  const token = String(process.env.AIRTABLE_TOKEN || '').trim();
  const base = String(process.env.AIRTABLE_BASE_ID || '').trim();
  if (!token || !base || !tableName) {
    return { table: tableName || '', ok: false, message: 'Missing AIRTABLE_TOKEN, AIRTABLE_BASE_ID, or table name' };
  }
  const url = new URL(`${AIRTABLE_API}/${base}/${encodeURIComponent(tableName)}`);
  url.searchParams.set('maxRecords', '1');
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const body = await response.json().catch(() => ({}));
  return {
    table: tableName,
    ok: response.ok,
    status: response.status,
    record_count: Array.isArray(body.records) ? body.records.length : undefined,
    error_type: body.error?.type || '',
    error_message: body.error?.message || '',
  };
}

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    if (req.method === 'GET') {
      const url = new URL(req.url, `https://${req.headers.host || 'www.nnpc.ai'}`);
      if (url.searchParams.get('action') === 'debug-token') {
        const configured = String(process.env.CERT_ADMIN_TOKEN || '').trim();
        const auth = String(req.headers.authorization || '');
        const provided = auth.replace(/^Bearer\s+/i, '').trim();
        return json(res, 200, {
          ok: true,
          vercel_env: process.env.VERCEL_ENV || '',
          configured: Boolean(configured),
          configured_length: configured.length,
          header_received: Boolean(auth),
          provided_length: provided.length,
          token_matches: Boolean(configured) && provided === configured,
          auth_mode: 'next-id-inline-v3',
        });
      }
      if (url.searchParams.get('action') === 'debug-airtable') {
        requireAdminRequest(req);
        const token = String(process.env.AIRTABLE_TOKEN || '').trim();
        const base = String(process.env.AIRTABLE_BASE_ID || '').trim();
        const memberTable = String(process.env.AIRTABLE_REGISTER_TABLE_NAME || process.env.AIRTABLE_TABLE_NAME || 'Register').trim();
        const certificatesTable = String(process.env.AIRTABLE_CERTIFICATES_TABLE_NAME || 'Certificates').trim();
        const [member_probe, certificates_probe] = await Promise.all([
          probeAirtableTable(memberTable),
          probeAirtableTable(certificatesTable),
        ]);
        return json(res, 200, {
          ok: true,
          airtable_token_configured: Boolean(token),
          airtable_token_length: token.length,
          airtable_token_starts_with_pat: token.startsWith('pat'),
          base_id_configured: Boolean(base),
          base_id_length: base.length,
          base_id_starts_with_app: base.startsWith('app'),
          member_table_name: memberTable,
          member_table_env: process.env.AIRTABLE_REGISTER_TABLE_NAME ? 'AIRTABLE_REGISTER_TABLE_NAME' : 'AIRTABLE_TABLE_NAME',
          certificates_table_name: certificatesTable,
          member_probe,
          certificates_probe,
        });
      }
      if (url.searchParams.get('action') === 'next-id') {
        const configured = String(process.env.CERT_ADMIN_TOKEN || '').trim();
        const auth = String(req.headers.authorization || '');
        const provided = auth.replace(/^Bearer\s+/i, '').trim();
        if (!configured) throw new Error('Missing CERT_ADMIN_TOKEN');
        if (provided !== configured) {
          return json(res, 401, {
            ok: false,
            message: `Authentication required (configured=${Boolean(configured)}, configured_length=${configured.length}, header_received=${Boolean(auth)}, provided_length=${provided.length})`,
          });
        }
        const certificate_id = await getNextCertificateId(
          url.searchParams.get('program') || 'INT',
          url.searchParams.get('year') || new Date().getFullYear(),
        );
        return json(res, 200, { ok: true, certificate_id });
      }
    }

    requireAdminRequest(req);

    if (req.method === 'GET') {
      const url = new URL(req.url, `https://${req.headers.host || 'www.nnpc.ai'}`);
      if (url.searchParams.get('action') === 'next-id') {
        const certificate_id = await getNextCertificateId(
          url.searchParams.get('program') || 'INT',
          url.searchParams.get('year') || new Date().getFullYear(),
        );
        return json(res, 200, { ok: true, certificate_id });
      }
      return json(res, 400, { ok: false, message: 'Unknown admin action' });
    }

    const data = await readBody(req);

    if (req.method === 'POST') {
      const certificate = await createCertificate(data);
      return json(res, 200, { ok: true, certificate });
    }

    if (req.method === 'PATCH') {
      const certificate = data.action === 'revoke'
        ? await revokeCertificate(data.certificate_id, data.revocation_reason)
        : await updateCertificate(data.certificate_id, data);
      return json(res, 200, { ok: true, certificate });
    }

    if (req.method === 'DELETE') {
      const deleted = await deleteDraftCertificate(data.certificate_id);
      return json(res, 200, { ok: true, deleted });
    }

    return json(res, 405, { ok: false, message: 'Method not allowed' });
  } catch (err) {
    const status = /auth/i.test(err.message) ? 401 : 500;
    console.error(err);
    return json(res, status, { ok: false, message: err.message || 'Certificate admin action failed' });
  }
};
