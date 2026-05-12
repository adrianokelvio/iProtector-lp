import { HashLink } from '../ui/HashLink';
import { Brand } from './Brand';
import { Arrow } from '../ui/Arrow';
import { useScrolled } from '../../hooks/useScrolled';
import { SITE } from '../../config/site';

type Props = {
  onOpenClient: () => void;
  onOpenPartner: () => void;
  onOpenDrawer: () => void;
};

export function Header({ onOpenClient, onOpenPartner, onOpenDrawer }: Props) {
  const scrolled = useScrolled(24);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Brand />

        <nav className="nav" aria-label="Navegação principal">
          {SITE.nav.map((item) => (
            <HashLink key={item.href} to={item.href}>
              {item.label}
            </HashLink>
          ))}
        </nav>

        <div className="header-cta">
          <button className="btn btn-ghost btn-sm" onClick={onOpenPartner}>
            Sou empresa de segurança
          </button>
          <button className="btn btn-primary btn-sm" onClick={onOpenClient}>
            Contratar proteção <Arrow />
          </button>
          <button
            className="mobile-toggle"
            onClick={onOpenDrawer}
            aria-label="Abrir menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
