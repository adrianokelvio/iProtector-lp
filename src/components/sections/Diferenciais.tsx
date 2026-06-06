const ITEMS = [
  {
    num: '[01]',
    title: 'Marketplace nacional de segurança.',
    desc: 'Plataforma que conecta demanda e oferta qualificada em todo o Brasil.',
  },
  {
    num: '[02]',
    title: 'Banco de protetores sob demanda.',
    desc: 'O maior banco nacional de agentes de proteção para mobilização imediata.',
  },
  {
    num: '[03]',
    title: 'Segurança executiva de elite.',
    desc: 'Agenciamento de proteção pessoal e patrimonial para perfis de alto risco.',
  },
  {
    num: '[04]',
    title: 'Security as a Service.',
    desc: 'Monitoramento robótico recorrente com tecnologia de ponta e central 24h.',
  },
  {
    num: '[05]',
    title: 'Drone Dock de ativação remota.',
    desc: 'Operação autônoma, vigilância aérea e resposta rápida a incidentes.',
  },
  {
    num: '[06]',
    title: 'Torres inteligentes de longo alcance.',
    desc: '30m de altura, alcance de 10 km, câmeras térmicas e operação remota.',
  },
  {
    num: '[07]',
    title: 'Rastreamento inteligente.',
    desc: 'Tags com geolocalização, alertas automáticos e histórico operacional.',
  },
  {
    num: '[08]',
    title: 'Mapeamento topográfico.',
    desc: 'Drones, georreferenciamento e análise de vulnerabilidades para planejamento.',
  },
  {
    num: '[09]',
    title: 'Treinamento de elite.',
    desc: 'Protocolos técnicos, operacionais e executive protection em três módulos.',
  },
  {
    num: '[10]',
    title: 'Captação de investimentos.',
    desc: 'Parceria LEGALCERT para expansão de empresas de segurança parceiras.',
  },
  {
    num: '[11]',
    title: 'Integração RWB Telecom.',
    desc: 'Conectividade e infraestrutura de comunicação para operações de campo.',
  },
  {
    num: '[12]',
    title: 'IA e CRM operacional.',
    desc: 'Gestão inteligente de leads, operações, SLA e performance comercial.',
  },
];

export function Diferenciais() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[DIFERENCIAIS COMPETITIVOS]</span>
          <h2>
            Por que o iProtector é a maior plataforma de proteção do Brasil.
          </h2>
        </div>

        <div className="diffs">
          {ITEMS.map((d) => (
            <div className="diff" key={d.num}>
              <div className="num">{d.num}</div>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
