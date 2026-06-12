import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

export function Servicos() {
  const { openClient, openPartner } = useModals();

  return (
    <section id="servicos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[SOLUÇÕES]</span>
          <h2>
            Proteção executiva, banco de protetores e veículos blindados.
          </h2>
          <p className="lead">
            O iProtector opera como marketplace de segurança, SaaS, treinamento
            corporativo, agenciamento de proteção executiva e captação de
            investimentos para empresas de segurança, tudo em um único
            ecossistema.
          </p>
        </div>

        <div className="delivery-grid">
          <div className="delivery-col">
            <h3>
              <span className="num">[01]</span> Agenciamento de proteção pessoal
              e patrimonial
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--fg-dim)', fontSize: '14px' }}>
              CEOs, empresários, investidores, autoridades, executivos C Level
              e famílias de alta renda.
            </p>
            <ul>
              <li>Segurança pessoal armada</li>
              <li>Segurança pessoal desarmada</li>
              <li>Escolta executiva</li>
              <li>Proteção familiar</li>
              <li>Segurança em viagens</li>
              <li>Segurança para eventos privados</li>
            </ul>
            <button className="btn btn-primary delivery-col__cta" onClick={openClient}>
              Contrate um agente <Arrow />
            </button>
          </div>
          <div className="delivery-col">
            <h3>
              <span className="num">[02]</span> Banco de protetores
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--fg-dim)', fontSize: '14px' }}>
              O maior banco nacional de agentes de proteção para atendimento
              sob demanda.
            </p>
            <ul>
              <li>Vigilantes</li>
              <li>Carros blindados</li>
              <li>Escoltas</li>
              <li>Agentes de segurança</li>
              <li>Operadores táticos</li>
              <li>Empresas de segurança</li>
            </ul>
            <button className="btn btn-primary delivery-col__cta" onClick={openPartner}>
              Faça parte do nosso banco de protetores <Arrow />
            </button>
          </div>
          <div className="delivery-col">
            <h3>
              <span className="num">[03]</span> Veículos blindados
            </h3>
            <p style={{ marginBottom: '1rem', color: 'var(--fg-dim)', fontSize: '14px' }}>
              Empresas de blindagem, locadoras de blindados e motoristas
              executivos integrados à plataforma.
            </p>
            <ul>
              <li>Locação diária</li>
              <li>Locação mensal</li>
              <li>Eventos corporativos</li>
              <li>Transporte executivo</li>
            </ul>
            <button className="btn btn-primary delivery-col__cta" onClick={openClient}>
              Solicite um veículo blindado <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
