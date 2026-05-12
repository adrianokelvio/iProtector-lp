import { useEffect, useState } from 'react';

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      setScrolled(window.scrollY > threshold);
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return scrolled;
}
