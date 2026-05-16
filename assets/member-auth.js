(function () {
  const VERIFIED_KEY = 'nnpc_verified';
  const EMAIL_KEY = 'nnpc_member_email';
  const EXP_KEY = 'nnpc_member_verified_until';
  const DEFAULT_DAYS = 30;

  function now() {
    return Date.now();
  }

  function expiry(days) {
    return now() + days * 24 * 60 * 60 * 1000;
  }

  function grant(email, days) {
    const until = expiry(days || DEFAULT_DAYS);
    sessionStorage.setItem(VERIFIED_KEY, '1');
    localStorage.setItem(VERIFIED_KEY, '1');
    localStorage.setItem(EXP_KEY, String(until));
    if (email) {
      sessionStorage.setItem(EMAIL_KEY, email);
      localStorage.setItem(EMAIL_KEY, email);
    }
    return until;
  }

  function isVerified() {
    if (sessionStorage.getItem(VERIFIED_KEY) === '1') return true;
    if (localStorage.getItem(VERIFIED_KEY) !== '1') return false;
    const until = Number(localStorage.getItem(EXP_KEY) || 0);
    if (until && until < now()) {
      clear();
      return false;
    }
    sessionStorage.setItem(VERIFIED_KEY, '1');
    return true;
  }

  function clear() {
    sessionStorage.removeItem(VERIFIED_KEY);
    sessionStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(VERIFIED_KEY);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(EXP_KEY);
  }

  window.NNPCMemberAuth = {
    grant,
    isVerified,
    clear,
  };
})();
