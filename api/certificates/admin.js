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

function requireAdminRequest(req) {
  const token = String(process.env.CERT_ADMIN_TOKEN || '').trim();
  if (!token) throw new Error('Missing CERT_ADMIN_TOKEN');
  const auth = String(req.headers.authorization || '');
  const provided = auth.replace(/^Bearer\s+/i, '').trim();
  if (provided !== token) {
    throw new Error(`Authentication required (configured=${Boolean(token)}, configured_length=${token.length}, header_received=${Boolean(auth)}, provided_length=${provided.length})`);
  }
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
