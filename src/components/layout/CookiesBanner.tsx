import { useCookieConsent } from '../../hooks/useCookieConsent';
import { Link } from 'react-router-dom';

export function CookiesBanner() {
  const { shouldShow, acceptAll, acceptEssential } = useCookieConsent();

  return (
    <div
      className={`cookies ${shouldShow ? 'show' : ''}`}
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <p>
        O iProtector utiliza cookies para garantir a melhor experiência de
        navegação, analisar o uso da plataforma e personalizar conteúdos. Ao
        continuar navegando, você concorda com a nossa{' '}
        <Link to="/privacidade">Política de Cookies</Link> e a{' '}
        <Link to="/privacidade">Política de Privacidade</Link>.
      </p>
      <div className="cookies-actions">
        <button className="btn btn-ghost btn-sm" onClick={acceptEssential}>
          Apenas essenciais
        </button>
        <button className="btn btn-primary btn-sm" onClick={acceptAll}>
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
