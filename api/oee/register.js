const {
  createMember,
  handleOptions,
  json,
  normalizeEmail,
  readBody,
  sendToolLink,
} = require('../_lib/oee-common');

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== 'POST') return json(res, 405, { ok: false, message: 'Method not allowed' });

  try {
    const data = await readBody(req);
    const email = normalizeEmail(data.email);
    if (data.website) return json(res, 200, { ok: true, email });
    if (!data.name || !data.company || !email) {
      return json(res, 400, { ok: false, message: 'Missing required member fields' });
    }

    await createMember({ ...data, email });
    await sendToolLink({ email, name: data.name, language: data.language });

    return json(res, 200, { ok: true, email });
  } catch (err) {
    console.error(err);
    return json(res, 500, { ok: false, message: err.message || 'Registration failed' });
  }
};
