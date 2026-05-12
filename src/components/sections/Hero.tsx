import { Arrow } from '../ui/Arrow';
import { StoreBadges } from '../ui/StoreBadges';
import { PhoneMockup } from './PhoneMockup';
import { useModals } from '../modals/ModalsContext';

export function Hero() {
  const { openClient, openPartner } = useModals();

  return (
    <section className="hero" id="top">
      <div className="hero-watermark" aria-hidden="true">
        <img src="/assets/iprotector-mark-gold.png" alt="" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow-row">
            <span className="eyebrow">[PERSONAL PROTECTION AS A SERVICE]</span>
            <span className="hero-live">Central ao vivo</span>
          </div>
          <h1>
            A nova geração de{' '}
            <span className="gold">
              <em>proteção</em>
            </span>{' '}
            como <span className="stroke">serviço</span>.
          </h1>
          <p className="lead">
            Conectamos você a agentes de segurança altamente qualificados, com
            operação monitorada 24&nbsp;horas, resposta imediata e tecnologia
            avançada em campo. Proteção real, contratada em poucos cliques —
            do app ao painel web.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={openClient}>
              Contratar proteção agora <Arrow />
            </button>
            <button className="btn btn-ghost" onClick={openPartner}>
              Sou empresa de segurança parceira
            </button>
          </div>

          <StoreBadges />
        </div>

        {/* Phone mockup — preview do app iProtector */}
        <div className="hero-visual-stack" aria-hidden="true">
          <PhoneMockup />
        </div>
      </div>

      {/* Trust strip — largura total para caber em uma única linha */}
      <div className="container">
        <div className="hero-trust">
          <span>[CENTRAL 24H]</span>
          <span>[AGENTES CERTIFICADOS]</span>
          <span>[RASTREABILIDADE TOTAL]</span>
          <span>[LGPD]</span>
        </div>
      </div>
    </section>
  );
}
