const {
  findMemberByEmail,
  handleOptions,
  json,
  normalizeEmail,
  readBody,
  sendToolLink,
} = require('../../lib/oee-common');

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== 'POST') return json(res, 405, { ok: false, message: 'Method not allowed' });

  try {
    const data = await readBody(req);
    const email = normalizeEmail(data.email);
    if (!email) return json(res, 400, { ok: false, message: 'Missing Email' });

    const member = await findMemberByEmail(email);
    if (!member) return json(res, 404, { ok: false, message: 'Member not found' });

    await sendToolLink({
      email,
      name: member.fields[process.env.AIRTABLE_FIELD_NAME || 'Name-Surname'] || '',
      language: data.language,
    });

    return json(res, 200, { ok: true, email });
  } catch (err) {
    console.error(err);
    return json(res, 500, { ok: false, message: err.message || 'Resend failed' });
  }
};
