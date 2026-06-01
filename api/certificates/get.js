const { getCertificate, handleOptions, json, normalizeCertificateId } = require('../../lib/certificates-common');

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== 'GET') return json(res, 405, { ok: false, message: 'Method not allowed' });

  try {
    const url = new URL(req.url, `https://${req.headers.host || 'www.nnpc.ai'}`);
    const certificateId = normalizeCertificateId(url.searchParams.get('id'));
    if (!certificateId) return json(res, 400, { ok: false, message: 'Missing certificate ID' });

    const certificate = await getCertificate(certificateId);
    if (!certificate || certificate.status === 'Draft') {
      return json(res, 404, { ok: false, message: 'Invalid certificate' });
    }

    return json(res, 200, { ok: true, certificate });
  } catch (err) {
    console.error(err);
    return json(res, 500, { ok: false, message: err.message || 'Certificate lookup failed' });
  }
};
