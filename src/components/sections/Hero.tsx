import { Arrow } from '../ui/Arrow';
import { StoreBadges } from '../ui/StoreBadges';
import { BackgroundVideo } from '../ui/BackgroundVideo';
import { useModals } from '../modals/ModalsContext';

const HERO_BG_VIDEO = '/assets/videos/hero-bg.mp4';

export function Hero() {
  const { openClient, openPartner } = useModals();

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <BackgroundVideo
          src={HERO_BG_VIDEO}
          title="iProtector"
          poster="/assets/hero-bg-source.png"
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            A maior plataforma de{' '}
            <span className="gold">
              <em>proteção</em>
            </span>{' '}
            e{' '}
            <span className="gold">
              <em>monitoramento</em>
            </span>{' '}
            do Brasil.
          </h1>
          <p className="lead">
            O iProtector é uma plataforma de tecnologia para agenciamento de
            Proteção Pessoal, Patrimonial e Monitoramento Robótico com
            Treinamentos de Elite, conectando clientes, empresas de segurança,
            agentes protetores e fornecedores de tecnologias avançadas de
            gerenciamento de riscos.
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
      </div>

      <div className="container">
        <div className="hero-trust">
          <span>[MARKETPLACE NACIONAL]</span>
          <span>[SECURITY AS A SERVICE]</span>
          <span>[BANCO DE PROTETORES]</span>
          <span>[TREINAMENTO DE ELITE]</span>
        </div>
      </div>
    </section>
  );
}
