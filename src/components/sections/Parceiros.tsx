import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

const VALUE_PROPS = [
  {
    title: 'Banco nacional de protetores.',
    desc: 'Cadastro de vigilantes, escoltas, operadores táticos, veículos blindados e empresas de segurança para atendimento sob demanda.',
  },
  {
    title: 'Demanda qualificada via marketplace.',
    desc: 'Leads segmentados de proteção executiva, patrimonial e monitoramento robótico — com CRM e automação integrados.',
  },
  {
    title: 'Captação de investimentos LEGALCERT.',
    desc: 'Expansão operacional, aquisição de equipamentos, frota blindada, centros de monitoramento e capital de giro.',
  },
  {
    title: 'Operação digitalizada e auditável.',
    desc: 'Recebimento de chamadas, despacho de agentes, telemetria, SLA e registro de ocorrência via plataforma.',
  },
  {
    title: 'Tecnologia avançada integrada.',
    desc: 'Drone Dock, torres inteligentes, rastreamento, mapeamento topográfico e integração com IA e CRM operacional.',
  },
  {
    title: 'Expansão nacional estruturada.',
    desc: 'Presença em São Paulo, Brasília e expansão para capitais estratégicas do agronegócio e grandes centros urbanos.',
  },
];

const STEPS = [
  {
    n: '1º',
    title: 'CADASTRO',
    desc: 'Protetores, empresas de segurança, veículos blindados e fornecedores de tecnologia entram na plataforma.',
  },
  {
    n: '2ª',
    title: 'HOMOLOGAÇÃO',
    desc: 'Validação de documentação, certificações, estrutura operacional e capacidade de atendimento por região.',
  },
  {
    n: '3º',
    title: 'ONBOARDING',
    desc: 'Treinamento na operação iProtector — protocolos, central 24h, CRM, padrão de atendimento e tecnologias.',
  },
  {
    n: '4ª',
    title: 'OPERAÇÃO ATIVA',
    desc: 'Integração ao fluxo de demanda da plataforma com monitoramento, SLA e remuneração transparente.',
  },
];

export function Parceiros() {
  const { openPartner } = useModals();
  return (
    <section className="b2b" id="parceiros">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[PARCEIROS B2B]</span>
          <h2>Banco de protetores. Demanda qualificada. Escala nacional.</h2>
        </div>

        <div className="b2b-grid">
          <aside className="b2b-pitch">
            <p className="lead">
              O iProtector é o marketplace nacional de segurança que conecta
              empresas parceiras a demanda qualificada de proteção executiva,
              patrimonial e monitoramento robótico.
            </p>
            <p className="b2b-pitch-sub">
              Cadastre protetores, empresas de segurança, veículos blindados e
              fornecedores de tecnologia. Em parceria com LEGALCERT, oferecemos
              também captação de investimentos para expansão operacional.
            </p>

            <div className="b2b-pitch-stats">
              <div>
                <div className="stat-num">1.000</div>
                <div className="stat-lbl">[META EMPRESAS PARCEIRAS]</div>
              </div>
              <div>
                <div className="stat-num">10k</div>
                <div className="stat-lbl">[META PROTETORES 2030]</div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={openPartner}>
              Quero cadastrar minha empresa <Arrow />
            </button>
          </aside>

          <div className="b2b-list">
            {VALUE_PROPS.map((v) => (
              <div className="b2b-item" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-process">
          {STEPS.map((s) => (
            <div className="b2b-step" key={s.n}>
              <div className="n">{s.n}</div>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="takerate">
          <div>
            <div className="label">[CAPTAÇÃO DE INVESTIMENTOS]</div>
            <div className="value">Parceria LEGALCERT</div>
            <a
              className="btn btn-primary btn-sm takerate-link"
              href="https://www.legalcert.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer a LEGALCERT <Arrow />
            </a>
          </div>
          <p>
            Expansão operacional, aquisição de equipamentos, frota blindada,
            centros de monitoramento e capital de giro. Documentação exigida:
            DRE, balanço patrimonial, fluxo de caixa, contratos relevantes,
            certidões, organograma e carteira de clientes dos últimos 3 anos.
          </p>
        </div>
      </div>
    </section>
  );
}
