const SEGS = [
  {
    title: 'Pessoas e famílias',
    desc: 'Proteção pessoal, residencial e em deslocamentos cotidianos.',
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
    title: 'Condomínios e clubes',
    desc: 'Reforço de portaria, rondas, eventos sociais e suporte ao corpo de segurança interno.',
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
    title: 'Executivos e personalidades',
    desc: 'Proteção VIP, escolta, deslocamentos sensíveis, blindagem operacional.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 22 L9 13 L15 13 L19 22" />
        <line x1="9" y1="13" x2="9" y2="22" />
        <line x1="15" y1="13" x2="15" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Fazendas e propriedades rurais',
    desc: 'Vigilância de perímetro, drones, monitoramento de acessos, suporte a equipes de campo.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 18 c4-2 7-2 9 0 s5 2 9 0" />
        <path d="M3 13 c4-2 7-2 9 0 s5 2 9 0" />
        <path d="M12 4 L12 8 M9 6 L15 6" />
      </svg>
    ),
  },
  {
    title: 'Hotéis, resorts e multipropriedades',
    desc: 'Segurança de hóspedes, eventos internos, controle de áreas comuns e operações sazonais.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="6" width="18" height="15" />
        <line x1="7" y1="10" x2="7" y2="10" />
        <line x1="11" y1="10" x2="11" y2="10" />
        <line x1="15" y1="10" x2="15" y2="10" />
        <line x1="7" y1="14" x2="7" y2="14" />
        <line x1="11" y1="14" x2="11" y2="14" />
        <line x1="15" y1="14" x2="15" y2="14" />
        <path d="M3 6 L12 2 L21 6" />
      </svg>
    ),
  },
  {
    title: 'Eventos corporativos e sociais',
    desc: 'De pequenos eventos privados a operações de Fórmula 1 e festivais de grande porte.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 18 V8 a3 3 0 0 1 6 0 V18 M13 18 V12 a3 3 0 0 1 6 0 V18 M3 18 h18" />
      </svg>
    ),
  },
];

export function Segmentos() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Para quem servimos</span>
          <h2>Da cidade ao campo. Da família à corporação.</h2>
          <p className="lead">
            A nossa rede atende perfis muito distintos — porque o padrão
            operacional é o mesmo, mas o agente, a tecnologia e o protocolo se
            adaptam a cada cenário.
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
      </div>
    </section>
  );
}
