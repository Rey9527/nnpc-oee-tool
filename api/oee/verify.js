const {
  findMemberByEmail,
  handleOptions,
  json,
  markMemberVerified,
  readBody,
  verifySignedToken,
} = require('../../lib/oee-common');

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== 'POST') return json(res, 405, { ok: false, message: 'Method not allowed' });

  try {
    const data = await readBody(req);
    const payload = verifySignedToken(data.token);
    const member = await findMemberByEmail(payload.email);
    if (!member) return json(res, 404, { ok: false, message: 'Member not found' });

    await markMemberVerified(member.id);
    return json(res, 200, { ok: true, email: payload.email });
  } catch (err) {
    console.error(err);
    return json(res, 400, { ok: false, message: err.message || 'Verification failed' });
  }
};
