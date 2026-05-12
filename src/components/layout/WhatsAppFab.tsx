import { useEffect, useRef } from 'react';
import { useDisclosure } from '../../hooks/useDisclosure';
import { getWhatsAppUrl } from '../../config/site';

export function WhatsAppFab() {
  const { isOpen, toggle, close } = useDisclosure();
  const cardRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (cardRef.current?.contains(target) || fabRef.current?.contains(target))
        return;
      close();
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [isOpen, close]);

  return (
    <>
      <button
        ref={fabRef}
        className="wa-fab"
        aria-label="Falar pelo WhatsApp"
        onClick={toggle}
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4ZM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.5c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
        </svg>
      </button>

      <div
        ref={cardRef}
        className={`wa-card ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Atendimento WhatsApp"
      >
        <h4>Como podemos ajudar?</h4>
        <p>
          Fale com a iProtector pelo WhatsApp. Atendimento humano em horário
          comercial.
        </p>
        <div className="wa-options">
          <a
            className="wa-option"
            href={getWhatsAppUrl(
              'Olá! Vim pelo site do iProtector e quero contratar um serviço de proteção. Pode me ajudar?',
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Quero contratar proteção</strong>
            <span>Comercial · cliente final</span>
          </a>
          <a
            className="wa-option"
            href={getWhatsAppUrl(
              'Olá! Sou de uma empresa de segurança e gostaria de me cadastrar como parceira do iProtector.',
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Sou empresa de segurança</strong>
            <span>Cadastro de parceria</span>
          </a>
        </div>
        <div className="footnote">
          Para emergências, use o botão de pânico no app.
        </div>
      </div>
    </>
  );
}
