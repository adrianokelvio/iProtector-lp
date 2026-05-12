import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

export function FinalCta() {
  const { openClient, openPartner } = useModals();
  return (
    <section className="final-cta">
      <div className="container">
        <h2>A iProtector não vende vigilância.</h2>
        <p className="lead">
          Vende tranquilidade, reação rápida, presença qualificada e proteção
          contínua — da cidade ao campo, do imóvel à família, do evento ao CEO.
        </p>
        <div className="ctas">
          <button className="btn btn-primary" onClick={openClient}>
            Contratar proteção agora <Arrow />
          </button>
          <button className="btn btn-ghost" onClick={openPartner}>
            Cadastrar minha empresa parceira
          </button>
        </div>
      </div>
    </section>
  );
}
