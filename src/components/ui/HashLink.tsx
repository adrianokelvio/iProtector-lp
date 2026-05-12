import { Link, useLocation } from 'react-router-dom';
import type { ReactNode, MouseEvent } from 'react';

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function HashLink({ to, children, className, onClick }: Props) {
  const { pathname } = useLocation();
  const [path, hash] = to.split('#');
  const sameRoutePath = path === '' ? pathname : path;
  const isSameRoute = sameRoutePath === pathname;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isSameRoute && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${hash}`);
    }
    onClick?.();
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
