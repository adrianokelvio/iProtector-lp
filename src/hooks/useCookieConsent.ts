import { useEffect, useState, useCallback } from 'react';

const KEY = 'ip_cookie_consent';
type Consent = 'all' | 'essential' | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === 'undefined') return null;
    return (localStorage.getItem(KEY) as Consent) ?? null;
  });
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (consent) {
      setShouldShow(false);
      return;
    }
    const timer = setTimeout(() => setShouldShow(true), 1200);
    return () => clearTimeout(timer);
  }, [consent]);

  const acceptAll = useCallback(() => {
    localStorage.setItem(KEY, 'all');
    setConsent('all');
    setShouldShow(false);
  }, []);

  const acceptEssential = useCallback(() => {
    localStorage.setItem(KEY, 'essential');
    setConsent('essential');
    setShouldShow(false);
  }, []);

  const reopen = useCallback(() => {
    localStorage.removeItem(KEY);
    setConsent(null);
    setShouldShow(true);
  }, []);

  return { consent, shouldShow, acceptAll, acceptEssential, reopen };
}
