const crypto = require('crypto');

const AIRTABLE_API = 'https://api.airtable.com/v0';

const FIELD = {
  name: process.env.AIRTABLE_FIELD_NAME || 'Name-Surname',
  email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
  phone: process.env.AIRTABLE_FIELD_PHONE || 'Phone Number',
  company: process.env.AIRTABLE_FIELD_COMPANY || 'Company',
  jobTitle: process.env.AIRTABLE_FIELD_JOB || 'Position / Department',
  country: process.env.AIRTABLE_FIELD_COUNTRY || 'Location',
  registeredAt: process.env.AIRTABLE_FIELD_REGISTERED_AT || 'Register Time',
  verified: process.env.AIRTABLE_FIELD_VERIFIED || 'Verified',
  language: process.env.AIRTABLE_FIELD_LANGUAGE || 'Language',
  source: process.env.AIRTABLE_FIELD_SOURCE || 'Source',
};

const TEXT = {
  zh: {
    subject: '【N/NPC】您的 OEE 工具連結',
    greeting: (name) => `您好，${name || 'N/NPC 會員'}！`,
    body: '感謝您申請 N/NPC OEE 工具。請點擊下方按鈕開啟 OEE 工廠獲利計算機。',
    button: '開啟 OEE 工具',
    note: '此工具連結將在 24 小時後失效。若您並未申請此連結，請忽略此封信件。',
    copy: '或直接複製此連結：',
  },
  en: {
    subject: '[N/NPC] Your OEE Tool Link',
    greeting: (name) => `Hello, ${name || 'N/NPC member'}!`,
    body: 'Thank you for requesting the N/NPC OEE tool. Click the button below to open the OEE Factory Profit Calculator.',
    button: 'Open OEE Tool',
    note: 'This tool link expires in 24 hours. If you did not request it, please ignore this email.',
    copy: 'Or copy this link:',
  },
  th: {
    subject: '[N/NPC] ลิงก์เครื่องมือ OEE ของคุณ',
    greeting: (name) => `สวัสดี, ${name || 'สมาชิก N/NPC'}!`,
    body: 'ขอบคุณที่ขอใช้เครื่องมือ OEE ของ N/NPC กรุณาคลิกปุ่มด้านล่างเพื่อเปิดเครื่องคำนวณกำไรโรงงาน OEE',
    button: 'เปิดเครื่องมือ OEE',
    note: 'ลิงก์เครื่องมือนี้จะหมดอายุใน 24 ชั่วโมง หากคุณไม่ได้ขอใช้ กรุณาเพิกเฉยต่ออีเมลนี้',
    copy: 'หรือคัดลอกลิงก์นี้:',
  },
};

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function json(res, status, body) {
  const allowedOrigin = String(process.env.ALLOWED_ORIGIN || '*')
    .trim()
    .split(/[\s,]+/)[0] || '*';
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function signToken(payload) {
  const secret = requireEnv('VERIFY_SECRET');
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  return `${data}.${sig}`;
}

function verifySignedToken(token) {
  const secret = requireEnv('VERIFY_SECRET');
  const [data, sig] = String(token || '').split('.');
  if (!data || !sig) throw new Error('Invalid token');
  const expected = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
    throw new Error('Invalid token signature');
  }
  const payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
  if (!payload.exp || Date.now() > payload.exp) throw new Error('Tool link expired');
  return payload;
}

function airtableUrl(path, params) {
  const base = requireEnv('AIRTABLE_BASE_ID');
  const tableName = requireEnv('AIRTABLE_TABLE_NAME').trim();
  const table = encodeURIComponent(tableName);
  const url = new URL(`${AIRTABLE_API}/${base}/${table}${path || ''}`);
  Object.entries(params || {}).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
}

async function airtableFetch(path, options, params) {
  const token = requireEnv('AIRTABLE_TOKEN');
  const tableName = requireEnv('AIRTABLE_TABLE_NAME').trim();
  const baseId = requireEnv('AIRTABLE_BASE_ID').trim();
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
      throw new Error(`Airtable 404: 找不到 Base 或 Table。請確認 AIRTABLE_BASE_ID=${baseId}，AIRTABLE_TABLE_NAME="${tableName}" 是否完全正確。`);
    }
    throw new Error(detail);
  }
  return body;
}

function airtableFields(data, verified) {
  return {
    [FIELD.name]: data.name || '',
    [FIELD.email]: normalizeEmail(data.email),
    [FIELD.phone]: data.phone || '',
    [FIELD.company]: data.company || '',
    [FIELD.jobTitle]: data.jobTitle || '',
    [FIELD.country]: data.country || '',
    [FIELD.registeredAt]: data.registeredAt || new Date().toISOString(),
    [FIELD.verified]: Boolean(verified),
    [FIELD.language]: data.language || '',
    [FIELD.source]: data.source || 'official-site-oee-registration',
  };
}

async function createMember(data) {
  const body = await airtableFetch('', {
    method: 'POST',
    body: JSON.stringify({ fields: airtableFields(data, false) }),
  });
  return body.id;
}

async function findMemberByEmail(email) {
  const escaped = normalizeEmail(email).replace(/'/g, "\\'");
  const body = await airtableFetch('', { method: 'GET' }, {
    maxRecords: '1',
    filterByFormula: `LOWER({${FIELD.email}})='${escaped}'`,
  });
  return body.records && body.records[0];
}

async function markMemberVerified(recordId) {
  await airtableFetch(`/${recordId}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields: { [FIELD.verified]: true } }),
  });
}

function verifyLinkFor(email) {
  const site = requireEnv('PUBLIC_SITE_URL').replace(/\/$/, '');
  const token = signToken({
    email: normalizeEmail(email),
    exp: Date.now() + 24 * 60 * 60 * 1000,
  });
  return `${site}/register.html?token=${encodeURIComponent(token)}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function emailHTML({ name, link, language }) {
  const t = TEXT[language] || TEXT.zh;
  const safeLink = escapeHTML(link);
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F5F5F5;font-family:Arial,sans-serif;color:#222222;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;padding:28px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid #DDDDDD;max-width:100%;">
        <tr><td style="padding:28px 30px;">
          <div style="font-family:Arial,sans-serif;font-size:24px;font-weight:bold;color:#222222;margin-bottom:22px;">N/NPC</div>
          <p style="color:#222222;font-size:18px;font-weight:bold;margin:0 0 14px;">${t.greeting(name)}</p>
          <p style="color:#333333;font-size:16px;line-height:1.7;margin:0 0 22px;">${t.body}</p>
          <p style="color:#222222;font-size:16px;line-height:1.7;margin:0 0 10px;"><strong>${t.button}</strong></p>
          <p style="font-size:16px;line-height:1.7;margin:0 0 24px;word-break:break-all;">
            <a href="${safeLink}" target="_blank" style="color:#0645AD;text-decoration:underline;">${safeLink}</a>
          </p>
          <p style="color:#555555;font-size:14px;margin:0;line-height:1.6;">${t.note}</p>
        </td></tr>
        <tr><td style="padding:18px 30px;border-top:1px solid #EEEEEE;">
          <p style="color:#777777;font-size:12px;margin:0;">© 2026 N/NPC Smart Manufacturing Solutions</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function emailText({ name, link, language }) {
  const t = TEXT[language] || TEXT.zh;
  return [
    'N/NPC',
    '',
    t.greeting(name),
    t.body,
    '',
    `${t.button}:`,
    link,
    '',
    t.note,
  ].join('\n');
}

async function sendToolLink({ email, name, language }) {
  const apiKey = requireEnv('RESEND_API_KEY');
  const from = requireEnv('FROM_EMAIL');
  const link = verifyLinkFor(email);
  const t = TEXT[language] || TEXT.zh;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: normalizeEmail(email),
      subject: t.subject,
      html: emailHTML({ name, link, language }),
      text: emailText({ name, link, language }),
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || `Resend request failed: ${res.status}`);
  return link;
}

module.exports = {
  createMember,
  findMemberByEmail,
  handleOptions,
  json,
  markMemberVerified,
  normalizeEmail,
  readBody,
  sendToolLink,
  verifySignedToken,
};
