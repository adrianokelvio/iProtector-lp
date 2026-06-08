import { useModals } from '../modals/ModalsContext';
import { PhoneVideoEmbed } from '../ui/PhoneVideoEmbed';

const MODELS = [
  {
    num: '[01]',
    title: 'Marketplace de segurança',
    desc: 'Agenciamento de proteção pessoal e patrimonial com banco nacional de protetores sob demanda.',
  },
  {
    num: '[02]',
    title: 'Security as a Service',
    desc: 'Monitoramento robótico recorrente com Drone Dock, torres inteligentes e central 24h.',
  },
  {
    num: '[03]',
    title: 'Treinamento corporativo',
    desc: 'Capacitação de elite em protocolos técnicos, operacionais e executive protection.',
  },
  {
    num: '[04]',
    title: 'Captação de investimentos',
    desc: 'Em parceria com LEGALCERT para expansão operacional, frota blindada e centros de monitoramento.',
  },
];

const MONITORING_IMPLANT_NOTE =
  'Equipamento: R$ 150 mil para implantação. Já inclui drone e sistema.';

const MONITORING_DEMO_VIDEO_SRC = '/assets/videos/monitoring-demo.mp4';
const MONITORING_DEMO_VIDEO_2_SRC = '/assets/videos/monitoring-demo-2.mp4';

export function Planos() {
  const { openClient } = useModals();
  return (
    <section id="planos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[MODELO DE RECEITA]</span>
          <h2>Precificação transparente para cada solução.</h2>
          <p className="lead">
            Proteção executiva, monitoramento robótico e treinamento de elite , 
            com planos estruturados para clientes corporativos, patrimoniais e
            operacionais.
          </p>
        </div>

        <div className="models-row">
          {MODELS.map((m) => (
            <div className="model" key={m.num}>
              <div className="num">{m.num}</div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">[PROTEÇÃO EXECUTIVA]</span>
          <h2>Planos mensais para proteção pessoal e patrimonial.</h2>
        </div>

        <div className="plans">
          <article className="plan">
            <div className="plan-name">[PLANO ESSENTIAL]</div>
            <div className="plan-price">
              R$ 18k<small> a 25k /mês</small>
            </div>
            <ul>
              <li>1 agente de proteção</li>
              <li>Até 12 horas por dia</li>
              <li>Atendimento urbano</li>
              <li>Análise de risco incluída</li>
              <li>Monitoramento operacional</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar Essential
            </button>
          </article>
          <article className="plan featured">
            <span className="pop-badge">[MAIS COMPLETO]</span>
            <div className="plan-name">[PLANO PREMIUM]</div>
            <div className="plan-price">
              R$ 35k<small> a 60k /mês</small>
            </div>
            <ul>
              <li>2 agentes de proteção</li>
              <li>Veículo dedicado</li>
              <li>Monitoramento operacional 24h</li>
              <li>Escolta executiva</li>
              <li>Relatórios e telemetria completos</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Solicitar Premium
            </button>
          </article>
          <article className="plan">
            <div className="plan-name">[FAMILY OFFICE]</div>
            <div className="plan-price">
              R$ 80k<small> a 250k /mês</small>
            </div>
            <ul>
              <li>Proteção familiar completa</li>
              <li>Escolta executiva dedicada</li>
              <li>Monitoramento patrimonial</li>
              <li>Veículos blindados sob demanda</li>
              <li>Gestor de segurança exclusivo</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar Family Office
            </button>
          </article>
        </div>

        <div className="section-head" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">[MONITORAMENTO ROBÓTICO]</span>
          <h2>Security as a Service com setup e mensalidade.</h2>
        </div>

        <div className="monitoring-layout">
          <aside className="monitoring-video-slot">
            <PhoneVideoEmbed
              src={MONITORING_DEMO_VIDEO_SRC}
              title="Demonstração de monitoramento robótico iProtector"
            />
          </aside>

          <div className="plans plans--monitoring">
          <article className="plan">
            <div className="plan-name">[CONDOMÍNIOS]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 5k<small> a 30k /mês</small>
            </div>
            <p className="plan-note">{MONITORING_IMPLANT_NOTE}</p>
            <ul>
              <li>Drone Dock + Torre Inteligente</li>
              <li>Central de monitoramento</li>
              <li>Condomínios residenciais horizontais</li>
              <li>Operação SaaS recorrente</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar proposta
            </button>
          </article>
          <article className="plan featured">
            <span className="pop-badge">[PATRIMONIAL]</span>
            <div className="plan-name">[FAZENDAS E RURAIS]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 8k<small> a 80k /mês</small>
            </div>
            <p className="plan-note">{MONITORING_IMPLANT_NOTE}</p>
            <ul>
              <li>Drone Dock + Torre de Vigilância</li>
              <li>Tags de rastreamento</li>
              <li>Software operacional integrado</li>
              <li>Mapeamento topográfico incluído</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Solicitar proposta
            </button>
          </article>
          <article className="plan">
            <div className="plan-name">[RESORTS E EVENTOS]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 20k<small> a 500k</small>
            </div>
            <p className="plan-note">{MONITORING_IMPLANT_NOTE}</p>
            <ul>
              <li>Projeto sob demanda</li>
              <li>Grandes eventos e resorts</li>
              <li>Infraestrutura completa de campo</li>
              <li>Equipe tática dedicada</li>
              <li>Ticket médio personalizado</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar proposta
            </button>
          </article>
          </div>

          <aside className="monitoring-video-slot">
            <PhoneVideoEmbed
              src={MONITORING_DEMO_VIDEO_2_SRC}
              title="Demonstração de monitoramento iProtector"
            />
          </aside>
        </div>

        <div className="section-head" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">[TREINAMENTO DE ELITE]</span>
          <h2>Capacitação corporativa com até 20 participantes.</h2>
        </div>

        <div className="plans">
          <article className="plan">
            <div className="plan-name">[CORPORATIVO]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 15k<small> a 30k</small>
            </div>
            <ul>
              <li>Até 20 participantes</li>
              <li>Protocolos técnicos e operacionais</li>
              <li>Gestão de riscos e prevenção</li>
              <li>Certificação iProtector</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar treinamento
            </button>
          </article>
          <article className="plan">
            <div className="plan-name">[TÁTICO AVANÇADO]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 30k<small> a 80k</small>
            </div>
            <ul>
              <li>Até 20 participantes</li>
              <li>Gestão de crises e evacuação</li>
              <li>Controle de perímetro</li>
              <li>Cenários de alto risco</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Solicitar treinamento
            </button>
          </article>
          <article className="plan featured">
            <span className="pop-badge">[VIP]</span>
            <div className="plan-name">[EXECUTIVE PROTECTION]</div>
            <div className="plan-price" style={{ fontSize: '32px' }}>
              R$ 50k<small> a 150k</small>
            </div>
            <ul>
              <li>Até 10 participantes</li>
              <li>Executive Protection Premium</li>
              <li>Ambiente urbano e rural</li>
              <li>Protocolos VIP de elite</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Solicitar treinamento
            </button>
          </article>
        </div>

        <p className="plans-footer">
          Captação de investimentos para empresas de segurança em parceria com
          LEGALCERT, expansão operacional, frota blindada e centros de
          monitoramento.{' '}
          <button type="button" className="link-button gold-link" onClick={openClient}>
            Falar com especialista →
          </button>
        </p>
      </div>
    </section>
  );
}
