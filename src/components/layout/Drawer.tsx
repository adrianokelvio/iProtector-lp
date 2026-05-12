import { HashLink } from '../ui/HashLink';
import { Arrow } from '../ui/Arrow';
import { SITE } from '../../config/site';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpenClient: () => void;
  onOpenPartner: () => void;
};

export function Drawer({ isOpen, onClose, onOpenClient, onOpenPartner }: Props) {
  return (
    <aside className={`drawer ${isOpen ? 'open' : ''}`}>
      <button
        className="drawer-close"
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      {SITE.nav.map((item) => (
        <HashLink key={item.href} to={item.href} onClick={onClose}>
          {item.label}
        </HashLink>
      ))}
      <button
        className="btn btn-ghost"
        onClick={() => {
          onClose();
          onOpenPartner();
        }}
      >
        Sou empresa de segurança
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          onClose();
          onOpenClient();
        }}
      >
        Contratar proteção <Arrow />
      </button>
    </aside>
  );
}
