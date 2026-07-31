const {
  clearSessionCookie,
  normalizeEmail,
  sendAdminLoginLink,
  sessionFromRequest,
  setSessionCookie,
  verifyPayload,
} = require('../../lib/certificate-admin-auth');
const {
  handleOptions,
  json,
  readBody,
} = require('../../lib/certificates-common');

function redirect(res, location) {
  res.statusCode = 302;
  res.setHeader('Location', location);
  res.setHeader('Cache-Control', 'no-store');
  res.end();
}

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    const url = new URL(req.url, `https://${req.headers.host || 'www.nnpc.ai'}`);

    if (req.method === 'GET' && url.searchParams.get('action') === 'verify') {
      const payload = verifyPayload(url.searchParams.get('token'), 'certificate-admin-login');
      setSessionCookie(res, payload.email);
      return redirect(res, '/admin/certificates/?login=success');
    }

    if (req.method === 'GET') {
      const session = sessionFromRequest(req);
      return json(res, 200, {
        ok: true,
        authenticated: Boolean(session),
        email: session?.email || '',
      });
    }

    if (req.method === 'POST') {
      const data = await readBody(req);
      if (data.action === 'logout') {
        clearSessionCookie(res);
        return json(res, 200, { ok: true });
      }

      const email = normalizeEmail(data.email);
      if (!email) return json(res, 400, { ok: false, message: '請輸入管理者 Email。' });
      await sendAdminLoginLink(req, email);
      return json(res, 200, {
        ok: true,
        message: '如果這個 Email 已被授權，登入連結已寄出。',
      });
    }

    return json(res, 405, { ok: false, message: 'Method not allowed' });
  } catch (err) {
    console.error(err);
    const status = /missing environment/i.test(err.message) ? 500 : 400;
    return json(res, status, { ok: false, message: err.message || 'Authentication failed' });
  }
};
