const CONSENT_STORAGE_KEY = 'fabiana-cookie-consent';

export function initCookieConsent() {
  const banner = document.getElementById('cookieConsent');
  const rejectButton = document.getElementById('cookieConsentReject');
  const sessionButton = document.getElementById('cookieConsentSession');
  const acceptButton = document.getElementById('cookieConsentAccept');

  if (!banner || !rejectButton || !sessionButton || !acceptButton) return;

  let hasConsent = false;

  try {
    hasConsent = ['accepted', 'rejected'].includes(localStorage.getItem(CONSENT_STORAGE_KEY))
      || sessionStorage.getItem(CONSENT_STORAGE_KEY) === 'session';
  } catch {
    hasConsent = false;
  }

  if (!hasConsent) banner.classList.remove('hidden');

  rejectButton.addEventListener('click', () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'rejected');
    } catch {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.add('hidden');
  });

  sessionButton.addEventListener('click', () => {
    try {
      sessionStorage.setItem(CONSENT_STORAGE_KEY, 'session');
    } catch {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.add('hidden');
  });

  acceptButton.addEventListener('click', () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    } catch {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.add('hidden');
  });
}
