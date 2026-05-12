import { useEffect, type ReactNode } from 'react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

type Props = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function ModalShell({ id, isOpen, onClose, children }: Props) {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal ${isOpen ? 'open' : ''}`}
      id={id}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
