import { useModals } from '../modals/ModalsContext';
import { PlanComparisonCard } from '../ui/PlanComparisonCard';
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
  'Equipamento: R$ 180 mil para implantação. Já inclui drone e sistema.';

const MONITORING_DEMO_VIDEO_2_SRC = '/assets/videos/monitoring-demo-2.mp4';

const MONITORING_FEATURE_LABELS = [
  'Drone Dock + torre inteligente',
  'Central de monitoramento',
  'Operação SaaS recorrente',
  'Tags de rastreamento',
  'Software operacional integrado',
  'Mapeamento topográfico',
  'Infraestrutura completa de campo',
  'Equipe tática dedicada',
  'Projetos para eventos e resorts',
] as const;

const EXECUTIVE_FEATURE_LABELS = [
  'Agente de proteção dedicado',
  'Cobertura até 12 horas por dia',
  'Atendimento urbano',
  'Análise de risco incluída',
  'Monitoramento operacional',
  '2 agentes de proteção',
  'Veículo dedicado',
  'Monitoramento operacional 24h',
  'Escolta executiva',
  'Relatórios e telemetria completos',
  'Proteção familiar completa',
  'Monitoramento patrimonial',
  'Veículos blindados sob demanda',
  'Gestor de segurança exclusivo',
] as const;

const EXECUTIVE_PLANS = [
  {
    name: '[PLANO ESSENTIAL]',
    priceMain: 'R$ 18k',
    priceSuffix: ' a 25k /mês',
    featured: false,
    badge: null,
    cta: 'Solicitar Essential',
    features: [true, true, true, true, true, false, false, false, false, false, false, false, false, false],
  },
  {
    name: '[PLANO PREMIUM]',
    priceMain: 'R$ 35k',
    priceSuffix: ' a 60k /mês',
    featured: true,
    badge: '[MAIS COMPLETO]',
    cta: 'Solicitar Premium',
    features: [true, false, true, true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: '[FAMILY OFFICE]',
    priceMain: 'R$ 80k',
    priceSuffix: ' a 250k /mês',
    featured: false,
    badge: null,
    cta: 'Solicitar Family Office',
    features: [true, false, true, true, true, true, true, true, true, true, true, true, true, true],
  },
] as const;

const MONITORING_PLANS = [
  {
    name: '[CONDOMÍNIOS]',
    priceMain: 'R$ 5k',
    priceSuffix: ' a 30k /mês',
    featured: false,
    badge: null,
    cta: 'Solicitar proposta',
    features: [true, true, true, false, false, false, false, false, false],
  },
  {
    name: '[FAZENDAS E RURAIS]',
    priceMain: 'R$ 8k',
    priceSuffix: ' a 80k /mês',
    featured: true,
    badge: '[PATRIMONIAL · MAIS COMPLETO]',
    cta: 'Solicitar proposta',
    features: [true, true, true, true, true, true, false, false, false],
  },
  {
    name: '[RESORTS E EVENTOS]',
    priceMain: 'R$ 20k',
    priceSuffix: ' a 500k',
    featured: false,
    badge: null,
    cta: 'Solicitar proposta',
    features: [true, true, true, true, true, true, true, true, true],
  },
] as const;

const TRAINING_FEATURE_LABELS = [
  'Acima de 20 participantes',
  'Protocolos técnicos e operacionais',
  'Gestão de riscos e prevenção',
  'Certificação iProtector',
  'Gestão de crises e evacuação',
  'Controle de perímetro',
  'Cenários de alto risco',
  'Turma exclusiva até 10 participantes',
  'Executive Protection Premium',
  'Ambiente urbano e rural',
  'Protocolos VIP de elite',
] as const;

const TRAINING_PLANS = [
  {
    name: '[CORPORATIVO]',
    priceMain: 'R$ 15k',
    priceSuffix: ' a 30k',
    featured: false,
    badge: null,
    cta: 'Solicitar treinamento',
    features: [false, true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: '[TÁTICO AVANÇADO]',
    priceMain: 'R$ 30k',
    priceSuffix: ' a 80k',
    featured: false,
    badge: null,
    cta: 'Solicitar treinamento',
    features: [false, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: '[EXECUTIVE PROTECTION]',
    priceMain: 'R$ 50k',
    priceSuffix: ' a 150k',
    featured: true,
    badge: '[MAIS COMPLETO · VIP]',
    cta: 'Solicitar treinamento',
    features: [true, true, true, true, true, true, true, true, true, true, true],
  },
] as const;

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

        <div className="plans plans--comparison">
          {EXECUTIVE_PLANS.map((plan) => (
            <PlanComparisonCard
              key={plan.name}
              plan={plan}
              featureLabels={EXECUTIVE_FEATURE_LABELS}
              onCta={openClient}
            />
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">[MONITORAMENTO ROBÓTICO]</span>
          <h2>Security as a Service com setup e mensalidade.</h2>
        </div>

        <div className="monitoring-layout">
          <div className="plans plans--monitoring">
            {MONITORING_PLANS.map((plan) => (
              <PlanComparisonCard
                key={plan.name}
                plan={{ ...plan, note: MONITORING_IMPLANT_NOTE }}
                featureLabels={MONITORING_FEATURE_LABELS}
                onCta={openClient}
              />
            ))}
          </div>

          <aside className="monitoring-video-slot">
            <PhoneVideoEmbed
              src={MONITORING_DEMO_VIDEO_2_SRC}
              title="Demonstração de monitoramento iProtector"
              variant="landscape"
            />
          </aside>
        </div>

        <div className="section-head" style={{ marginTop: '4rem' }}>
          <span className="eyebrow">[TREINAMENTO DE ELITE]</span>
          <h2>Capacitação corporativa com até 20 participantes.</h2>
        </div>

        <div className="plans plans--comparison plans--training">
          {TRAINING_PLANS.map((plan) => (
            <PlanComparisonCard
              key={plan.name}
              plan={plan}
              featureLabels={TRAINING_FEATURE_LABELS}
              onCta={openClient}
            />
          ))}
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
