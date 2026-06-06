const MODULOS = [
  {
    num: '[MÓDULO 1]',
    title: 'Protocolos técnicos',
    items: ['ABNT', 'Infraestrutura', 'Logística', 'Tecnologia', 'Gestão de riscos'],
  },
  {
    num: '[MÓDULO 2]',
    title: 'Protocolos operacionais',
    items: [
      'Prevenção',
      'Dissuasão',
      'Gestão de crises',
      'Evacuação',
      'Controle de perímetro',
    ],
  },
  {
    num: '[MÓDULO 3]',
    title: 'Treinamento VIP',
    items: [
      'Executive Protection',
      'Ambiente urbano',
      'Ambiente rural',
      'Cenários de alto risco',
    ],
  },
];

const PUBLICO = [
  'Equipes de segurança patrimonial',
  'Vigilantes e controladores de acesso',
  'Equipes de eventos',
  'Gestores e síndicos de condomínios',
  'Resorts e fazendas',
];

export function Treinamento() {
  return (
    <section id="treinamento">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[TREINAMENTO DE ELITE]</span>
          <h2>Capacitação corporativa para operações de alto padrão.</h2>
          <p className="lead">
            Programa estruturado em três módulos para equipes de segurança,
            vigilantes, gestores e operadores que atuam em ambientes urbanos,
            rurais e de alto risco.
          </p>
        </div>

        <div className="models-row" style={{ marginBottom: '2rem' }}>
          {PUBLICO.map((p) => (
            <div className="model" key={p}>
              <p style={{ fontSize: '14px', color: 'var(--fg-dim)' }}>{p}</p>
            </div>
          ))}
        </div>

        <div className="delivery-grid">
          {MODULOS.map((m) => (
            <div className="delivery-col" key={m.num}>
              <h3>
                <span className="num">{m.num}</span> {m.title}
              </h3>
              <ul>
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
