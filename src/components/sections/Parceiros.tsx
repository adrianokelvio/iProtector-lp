import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

const VALUE_PROPS = [
  {
    title: 'Fluxo contínuo de demanda qualificada.',
    desc: 'Clientes prontos, segmentados e dispostos a pagar pelo serviço certo.',
  },
  {
    title: 'Operação digitalizada.',
    desc: 'Recebimento de chamadas, despacho de agentes, telemetria e registro de ocorrência via plataforma — sem retrabalho.',
  },
  {
    title: 'Pagamento garantido e rastreável.',
    desc: 'A iProtector centraliza o pagamento e repassa de forma transparente.',
  },
  {
    title: 'Padrão de marca preservado.',
    desc: 'Sua marca interna continua existindo. O iProtector é a camada de plataforma.',
  },
  {
    title: 'Visibilidade comercial.',
    desc: 'Acesso a métricas, avaliações e oportunidades de expansão de portfólio.',
  },
  {
    title: 'Acesso a tecnologia.',
    desc: 'Drones, rastreadores, dispositivos e integrações que reforçam sua entrega operacional.',
  },
];

const STEPS = [
  {
    n: '1º',
    title: 'CADASTRO',
    desc: 'Sua empresa preenche o formulário. Validamos CNPJ, alvarás, certificações e perfil operacional.',
  },
  {
    n: '2ª',
    title: 'HOMOLOGAÇÃO',
    desc: 'Verificamos estrutura, equipe, processos e capacidade de atendimento por região.',
  },
  {
    n: '3º',
    title: 'ONBOARDING',
    desc: 'Sua equipe é treinada na operação iProtector — uso do app, protocolos da central, padrão de atendimento.',
  },
  {
    n: '4ª',
    title: 'OPERAÇÃO ATIVA',
    desc: 'Sua empresa passa a receber demanda da plataforma e ser remunerada por atendimento concluído.',
  },
];

export function Parceiros() {
  const { openPartner } = useModals();
  return (
    <section className="b2b" id="parceiros">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[PARCEIROS B2B]</span>
          <h2>Sua operação. Nossa demanda. Um padrão único.</h2>
        </div>

        <div className="b2b-grid">
          {/* Left: sticky pitch card */}
          <aside className="b2b-pitch">
            <p className="lead">
              O iProtector é uma plataforma de intermediação. Trabalhamos lado
              a lado com empresas de segurança parceiras que já operam com
              excelência no mercado.
            </p>
            <p className="b2b-pitch-sub">
              Se a sua empresa tem agentes treinados, estrutura operacional e
              capacidade para atender mais — nós trazemos a demanda, organizamos
              o atendimento e garantimos o pagamento.
            </p>

            <div className="b2b-pitch-stats">
              <div>
                <div className="stat-num">15–30%</div>
                <div className="stat-lbl">Take rate transparente</div>
              </div>
              <div>
                <div className="stat-num">24/7</div>
                <div className="stat-lbl">Central iProtector</div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={openPartner}>
              Quero cadastrar minha empresa <Arrow />
            </button>
          </aside>

          {/* Right: 2-col grid of value props, top-aligned with the pitch */}
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
            <div className="label">Modelo de remuneração</div>
            <div className="value">Take rate de 15% a 30%</div>
          </div>
          <p>
            Sobre o valor pago pelo cliente final, com repasse direto e
            transparente. Para contratos enterprise e operações continuadas,
            modelos específicos são negociados conforme volume, complexidade e
            exclusividade.
          </p>
        </div>
      </div>
    </section>
  );
}
