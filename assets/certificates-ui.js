(function () {
  const SAMPLE = {
    certificate_id: 'NNPC-INT-2026-001',
    recipient_name: 'Lin Myat Phyo',
    position: 'Data & AI Operation Analyst Intern',
    program: 'NNPC Internship Program',
    certificate_type: 'internship_completion',
    start_date: '2025-12-05',
    end_date: '2026-06-04',
    issue_date: '2026-06-05',
    status: 'Verified',
    issued_by_name: 'Derek Yeh',
    issued_by_title: 'Chief Executive Officer',
  };

  const TEXT = {
    zh: {
      invalid: 'INVALID CERTIFICATE',
      verified: 'VERIFIED',
      revoked: 'REVOKED',
      expired: 'EXPIRED',
      draft: 'DRAFT',
      notFound: '查無此證書，請確認 Certificate ID 是否正確。',
      lookupError: '暫時無法連線到證書系統，請稍後再試。',
      enterId: '請輸入 Certificate ID',
      copied: '已複製',
      linkedinName: 'NNPC Internship Completion Certificate',
      org: 'NNPC Consulting Co., Ltd.',
    },
    en: {
      invalid: 'INVALID CERTIFICATE',
      verified: 'VERIFIED',
      revoked: 'REVOKED',
      expired: 'EXPIRED',
      draft: 'DRAFT',
      notFound: 'No certificate was found. Please check the Certificate ID.',
      lookupError: 'We cannot connect to the certificate system right now. Please try again later.',
      enterId: 'Please enter a Certificate ID',
      copied: 'Copied',
      linkedinName: 'NNPC Internship Completion Certificate',
      org: 'NNPC Consulting Co., Ltd.',
    },
    th: {
      invalid: 'INVALID CERTIFICATE',
      verified: 'VERIFIED',
      revoked: 'REVOKED',
      expired: 'EXPIRED',
      draft: 'DRAFT',
      notFound: 'ไม่พบใบรับรองนี้ กรุณาตรวจสอบ Certificate ID',
      lookupError: 'ยังไม่สามารถเชื่อมต่อระบบใบรับรองได้ กรุณาลองใหม่ภายหลัง',
      enterId: 'กรุณากรอก Certificate ID',
      copied: 'คัดลอกแล้ว',
      linkedinName: 'NNPC Internship Completion Certificate',
      org: 'NNPC Consulting Co., Ltd.',
    },
  };

  function lang() {
    const saved = localStorage.getItem('nnpc_lang');
    if (['zh', 'en', 'th'].includes(saved)) return saved;
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('th')) return 'th';
    if (nav.startsWith('zh')) return 'zh';
    return 'en';
  }

  function t(key) {
    return (TEXT[lang()] || TEXT.en)[key] || TEXT.en[key] || key;
  }

  function certificateIdFromPath() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const pathId = parts[1] && parts[1] !== 'verify.html' ? parts[1] : '';
    const queryId = new URLSearchParams(window.location.search).get('id') || '';
    return decodeURIComponent(pathId || queryId).trim().toUpperCase();
  }

  function formatLongDate(value) {
    if (!value) return '';
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(lang() === 'zh' ? 'zh-TW' : lang(), {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }

  function formatPeriod(start, end) {
    const startDate = new Date(`${start}T00:00:00`);
    const endDate = new Date(`${end}T00:00:00`);
    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return '';
    const locale = lang() === 'zh' ? 'zh-TW' : lang();
    const formatter = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' });
    return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
  }

  async function fetchCertificate(id) {
    try {
      const res = await fetch(`/api/certificates/get?id=${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error(res.status === 404 ? 'not-found' : 'lookup-error');
      const data = await res.json();
      return data.certificate;
    } catch (err) {
      if (id === SAMPLE.certificate_id) return SAMPLE;
      throw err;
    }
  }

  function statusClass(status) {
    const normalized = String(status || '').toLowerCase();
    if (normalized === 'verified') return 'verified';
    if (normalized === 'revoked') return 'revoked';
    if (normalized === 'expired') return 'expired';
    return 'invalid';
  }

  function statusText(status) {
    const normalized = String(status || '').toLowerCase();
    if (normalized === 'verified') return `✓ ${t('verified')}`;
    if (normalized === 'revoked') return t('revoked');
    if (normalized === 'expired') return t('expired');
    if (normalized === 'draft') return t('draft');
    return t('invalid');
  }

  function setText(id, text) {
    document.querySelectorAll(`#${id}`).forEach((el) => {
      el.textContent = text || '—';
    });
  }

  function setCopyButton(button, value) {
    if (!button) return;
    button.addEventListener('click', async () => {
      await navigator.clipboard.writeText(value);
      const old = button.textContent;
      button.textContent = t('copied');
      setTimeout(() => { button.textContent = old; }, 1200);
    });
  }

  async function initSearch() {
    const form = document.querySelector('[data-certificate-search]');
    if (!form) return;
    const input = form.querySelector('input');
    const message = document.querySelector('[data-certificate-message]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const id = String(input.value || '').trim().toUpperCase();
      if (!id) {
        if (message) message.textContent = t('enterId');
        return;
      }
      window.location.href = `/certificates/${encodeURIComponent(id)}`;
    });
  }

  async function initVerify() {
    const root = document.querySelector('[data-certificate-detail]');
    if (!root) return;
    const id = certificateIdFromPath();
    const status = document.getElementById('cert-status');
    const error = document.getElementById('cert-error');

    try {
      const cert = await fetchCertificate(id);
      if (!cert) throw new Error('not-found');
      const certStatus = statusClass(cert.status);
      if (status) {
        status.className = `certificate-status ${certStatus}`;
        status.textContent = statusText(cert.status);
      }
      setText('cert-id', cert.certificate_id);
      setText('cert-name', cert.recipient_name);
      setText('cert-position', cert.position);
      setText('cert-program', cert.program);
      setText('cert-start', formatLongDate(cert.start_date));
      setText('cert-end', formatLongDate(cert.end_date));
      setText('cert-issue', formatLongDate(cert.issue_date));
      setText('cert-period', formatPeriod(cert.start_date, cert.end_date));
      setText('cert-issued-by', `${cert.issued_by_name}\n${cert.issued_by_title}\nNNPC Consulting Co., Ltd.`);

      const credentialUrl = `${window.location.origin}/certificates/${encodeURIComponent(cert.certificate_id)}`;
      setText('linkedin-name', t('linkedinName'));
      setText('linkedin-org', t('org'));
      setText('linkedin-id', cert.certificate_id);
      setText('linkedin-url', credentialUrl);
      setCopyButton(document.querySelector('[data-copy="id"]'), cert.certificate_id);
      setCopyButton(document.querySelector('[data-copy="url"]'), credentialUrl);
      root.classList.remove('is-loading');
    } catch (err) {
      if (status) {
        status.className = 'certificate-status invalid';
        status.textContent = t('invalid');
      }
      if (error) error.textContent = err.message === 'not-found' ? t('notFound') : t('lookupError');
      root.classList.add('is-invalid');
      root.classList.remove('is-loading');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initVerify();
  });
}());
