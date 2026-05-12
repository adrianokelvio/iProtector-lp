import { Link } from 'react-router-dom';
import { HashLink } from '../ui/HashLink';
import { getWhatsAppUrl } from '../../config/site';

type Props = {
  onOpenPartner: () => void;
  onOpenCookies: () => void;
};

export function Footer({ onOpenPartner, onOpenCookies }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <Link to="/" className="brand brand-svg brand-svg--footer">
              <img
                src="/assets/iprotector-logo.svg"
                alt="iProtector"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p>A nova geração de proteção como serviço.</p>
            <div className="footer-meta">
              [Endereço a preencher]
              <br />
              CNPJ [a preencher]
              <br />
              contato@iprotector.com.br
            </div>
          </div>

          <div className="footer-col">
            <h5>[PRODUTO]</h5>
            <ul>
              <li>
                <HashLink to="/#como-funciona">Como funciona</HashLink>
              </li>
              <li>
                <HashLink to="/#servicos">Serviços</HashLink>
              </li>
              <li>
                <HashLink to="/#planos">Planos</HashLink>
              </li>
              <li>
                <a href="#">App (iOS / Android)</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>[PARCEIROS]</h5>
            <ul>
              <li>
                <HashLink to="/#parceiros">Para empresas de segurança</HashLink>
              </li>
              <li>
                <button type="button" className="link-button" onClick={onOpenPartner}>
                  Cadastro de parceiros
                </button>
              </li>
              <li>
                <a href="#">Portal do parceiro</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>[EMPRESA]</h5>
            <ul>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <a href="#">Sobre o iProtector</a>
              </li>
              <li>
                <a href="#">Carreiras</a>
              </li>
              <li>
                <a href="#">Imprensa</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>[LEGAL]</h5>
            <ul>
              <li>
                <Link to="/privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/termos">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/privacidade#contato">LGPD / DPO</Link>
              </li>
              <li>
                <button type="button" className="link-button" onClick={onOpenCookies}>
                  Política de Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2025 iProtector — Todos os direitos reservados. iProtector é uma
            plataforma de intermediação. Os serviços de segurança em campo são
            executados por empresas parceiras devidamente certificadas e
            homologadas.
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.2 8.65 22 10.7 22 13.5V21h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.45V21h-4V9Z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17 3.4 12 3.4 12 3.4s-5 0-8.1.3c-.4 0-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.7c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.8.3 7.8.3s5 0 8.1-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.7C23.2 8.9 23 7 23 7ZM9.7 14.6V8.4l6.3 3.1-6.3 3.1Z" />
              </svg>
            </a>
            <a
              href={getWhatsAppUrl()}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4ZM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.5c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
