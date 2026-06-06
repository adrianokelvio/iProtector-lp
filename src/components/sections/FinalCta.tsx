import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

export function FinalCta() {
  const { openClient, openPartner } = useModals();
  return (
    <section className="final-cta">
      <div className="container">
        <span className="eyebrow">[VISÃO 2030]</span>
        <h2>A maior plataforma brasileira de proteção e monitoramento inteligente.</h2>
        <p className="lead">
          Tornar o iProtector o ecossistema nacional que conecta clientes,
          agentes protetores, empresas de segurança e tecnologias avançadas de
          gerenciamento de riscos — com meta de 10.000 protetores, 1.000
          empresas parceiras, 500 condomínios monitorados, 200 fazendas
          conectadas, 100 resorts atendidos e receita recorrente superior a
          R$ 100 milhões por ano.
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
