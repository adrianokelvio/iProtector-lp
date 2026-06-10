import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll(): void {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
      return;
    }
    const id = hash.replace('#', '');
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [hash, pathname]);
}
