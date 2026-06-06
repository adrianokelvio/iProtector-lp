const SEGS = [
  {
    title: 'CEOs e executivos C-Level',
    desc: 'Proteção pessoal armada, escolta executiva e segurança em viagens e eventos corporativos.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 22 L9 13 L15 13 L19 22" />
      </svg>
    ),
  },
  {
    title: 'Famílias de alta renda',
    desc: 'Proteção familiar, escolta executiva e monitoramento patrimonial com plano Family Office.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3 20 c1-4 4-6 6-6 s5 2 6 6" />
        <path d="M14 20 c1-3 2-4 4-4 s3 1 3 4" />
      </svg>
    ),
  },
  {
    title: 'Condomínios horizontais',
    desc: 'Monitoramento robótico com Drone Dock, torres inteligentes e central de monitoramento SaaS.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="10" width="18" height="11" />
        <path d="M3 10 L12 3 L21 10" />
        <line x1="9" y1="21" x2="9" y2="14" />
        <line x1="15" y1="21" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Fazendas e condomínios rurais',
    desc: 'Vigilância perimetral, torres de 30m, tags de rastreamento e mapeamento topográfico.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 18 c4-2 7-2 9 0 s5 2 9 0" />
        <path d="M3 13 c4-2 7-2 9 0 s5 2 9 0" />
        <path d="M12 4 L12 8 M9 6 L15 6" />
      </svg>
    ),
  },
  {
    title: 'Resorts e associações',
    desc: 'Security as a Service para áreas amplas, eventos abertos e operações sazonais de alto padrão.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="6" width="18" height="15" />
        <path d="M3 6 L12 2 L21 6" />
        <line x1="7" y1="10" x2="7" y2="10" />
        <line x1="11" y1="10" x2="11" y2="10" />
        <line x1="15" y1="10" x2="15" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Grandes eventos',
    desc: 'Projetos sob demanda com infraestrutura completa, equipe tática e monitoramento em tempo real.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 18 V8 a3 3 0 0 1 6 0 V18 M13 18 V12 a3 3 0 0 1 6 0 V18 M3 18 h18" />
      </svg>
    ),
  },
];

const FASES = [
  { fase: 'Fase 1', cidades: 'São Paulo e Brasília' },
  { fase: 'Fase 2', cidades: 'Belo Horizonte, Goiânia, Curitiba e Florianópolis' },
  {
    fase: 'Fase 3',
    cidades:
      'Ribeirão Preto, Uberlândia, Campo Grande, Cuiabá, Londrina, Cascavel e Luís Eduardo Magalhães',
  },
];

export function Segmentos() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[SEGMENTOS E EXPANSÃO]</span>
          <h2>Do executivo ao campo. Presença nacional em expansão.</h2>
          <p className="lead">
            Atendemos perfis de alta exposição e patrimônios de grande porte —
            com expansão estruturada em três fases para cobertura nacional
            completa.
          </p>
        </div>

        <div className="segments">
          {SEGS.map((s) => (
            <div className="seg-card" key={s.title}>
              <div className="seg-illu">{s.svg}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="models-row" style={{ marginTop: '3rem' }}>
          {FASES.map((f) => (
            <div className="model" key={f.fase}>
              <div className="num">[{f.fase.toUpperCase()}]</div>
              <h4>{f.cidades}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
