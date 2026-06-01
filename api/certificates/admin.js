const {
  createCertificate,
  deleteDraftCertificate,
  handleOptions,
  json,
  readBody,
  requireAdmin,
  revokeCertificate,
  updateCertificate,
} = require('../../lib/certificates-common');

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    requireAdmin(req);
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
