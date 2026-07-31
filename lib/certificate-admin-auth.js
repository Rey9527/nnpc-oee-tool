const crypto = require('crypto');

const COOKIE_NAME = 'nnpc_cert_admin_session';
const LOGIN_TTL_MS = 15 * 60 * 1000;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function requireEnv(name) {
  const value = String(process.env[name] || '').trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function adminEmails() {
  return String(process.env.CERT_ADMIN_EMAIL || process.env.SPATIAL_NOTIFY_EMAIL || '')
    .split(/[\s,;]+/)
    .map(normalizeEmail)
    .filter(Boolean);
}

function isAllowedAdminEmail(email) {
  const allowed = adminEmails();
  if (!allowed.length) throw new Error('Missing environment variable: CERT_ADMIN_EMAIL');
  return allowed.includes(normalizeEmail(email));
}

function signingSecret() {
  return requireEnv('VERIFY_SECRET');
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ''));
  const b = Buffer.from(String(right || ''));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function signPayload(payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', signingSecret())
    .update(data)
    .digest('base64url');
  return `${data}.${signature}`;
}

function verifyPayload(token, purpose) {
  const [data, signature] = String(token || '').split('.');
  if (!data || !signature) throw new Error('Invalid authentication link');
  const expected = crypto
    .createHmac('sha256', signingSecret())
    .update(data)
    .digest('base64url');
  if (!safeEqual(signature, expected)) throw new Error('Invalid authentication link');

  let payload;
  try {
    payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
  } catch (err) {
    throw new Error('Invalid authentication link');
  }
  if (payload.purpose !== purpose) throw new Error('Invalid authentication link');
  if (!payload.exp || Date.now() > Number(payload.exp)) throw new Error('Authentication link expired');
  if (!isAllowedAdminEmail(payload.email)) throw new Error('Administrator access is not allowed');
  return payload;
}

function createLoginToken(email) {
  const normalized = normalizeEmail(email);
  if (!isAllowedAdminEmail(normalized)) throw new Error('Administrator access is not allowed');
  return signPayload({
    purpose: 'certificate-admin-login',
    email: normalized,
    exp: Date.now() + LOGIN_TTL_MS,
  });
}

function createSessionToken(email) {
  return signPayload({
    purpose: 'certificate-admin-session',
    email: normalizeEmail(email),
    exp: Date.now() + SESSION_TTL_MS,
  });
}

function parseCookies(req) {
  return String(req.headers.cookie || '').split(';').reduce((cookies, part) => {
    const index = part.indexOf('=');
    if (index < 0) return cookies;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (key) cookies[key] = decodeURIComponent(value);
    return cookies;
  }, {});
}

function sessionFromRequest(req) {
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token) return null;
  try {
    return verifyPayload(token, 'certificate-admin-session');
  } catch (err) {
    return null;
  }
}

function requireCertificateAdmin(req) {
  const session = sessionFromRequest(req);
  if (session) return session;
  throw new Error('Authentication required');
}

function setSessionCookie(res, email) {
  const token = createSessionToken(email);
  const secure = process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL);
  res.setHeader('Set-Cookie', [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    'Path=/',
    `Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
    'HttpOnly',
    'SameSite=Lax',
    secure ? 'Secure' : '',
  ].filter(Boolean).join('; '));
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', [
    `${COOKIE_NAME}=`,
    'Path=/',
    'Max-Age=0',
    'HttpOnly',
    'SameSite=Lax',
    process.env.VERCEL ? 'Secure' : '',
  ].filter(Boolean).join('; '));
}

function publicSiteUrl(req) {
  const configured = String(process.env.PUBLIC_SITE_URL || '').trim().replace(/\/$/, '');
  if (configured) return configured;
  const protocol = String(req.headers['x-forwarded-proto'] || 'https').split(',')[0];
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || 'www.nnpc.ai').split(',')[0];
  return `${protocol}://${host}`;
}

async function sendAdminLoginLink(req, email) {
  const normalized = normalizeEmail(email);
  if (!isAllowedAdminEmail(normalized)) return false;

  const token = createLoginToken(normalized);
  const loginUrl = new URL('/api/certificates/auth', publicSiteUrl(req));
  loginUrl.searchParams.set('action', 'verify');
  loginUrl.searchParams.set('token', token);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${requireEnv('RESEND_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: requireEnv('FROM_EMAIL'),
      to: normalized,
      subject: '【N/NPC】Certificate Admin 登入連結',
      text: [
        'N/NPC Certificate Admin',
        '',
        '請點擊以下連結登入證書管理畫面：',
        loginUrl.toString(),
        '',
        '此連結 15 分鐘內有效。若不是您提出的要求，請忽略這封郵件。',
      ].join('\n'),
    }),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || `Resend request failed: ${response.status}`);
  return true;
}

module.exports = {
  clearSessionCookie,
  createSessionToken,
  normalizeEmail,
  requireCertificateAdmin,
  sendAdminLoginLink,
  sessionFromRequest,
  setSessionCookie,
  verifyPayload,
};
