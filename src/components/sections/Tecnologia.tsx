const ITEMS = [
  {
    title: 'Drone Dock',
    desc: 'Ativação remota, operação autônoma, vigilância aérea e resposta rápida a invasões, incêndios, furtos e monitoramento perimetral.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="12" cy="12" r="2" />
        <line x1="8" y1="8" x2="11" y2="11" />
        <line x1="16" y1="8" x2="13" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Torres de vigilância',
    desc: 'Altura de 30m, alcance até 10 km, rotação 360°, câmeras térmicas, infravermelho e operação remota para fazendas, condomínios, resorts e eventos.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2 v20 M8 6 h8 M7 10 h10 M6 14 h12 M5 18 h14" />
      </svg>
    ),
  },
  {
    title: 'Tags de rastreamento',
    desc: 'Geolocalização, alertas automáticos e histórico operacional para veículos, máquinas, equipamentos, animais e ativos críticos.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22 s8-6 8-12 a8 8 0 0 0 -16 0 c0 6 8 12 8 12 Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Mapeamento topográfico',
    desc: 'Mapeamento com drones, georreferenciamento, análise de vulnerabilidades e planejamento de segurança para grandes propriedades.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 18 L9 10 L14 14 L21 6" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Central de monitoramento',
    desc: 'Security as a Service recorrente para condomínios, fazendas, resorts, associações e eventos abertos, com operação 24h.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="6" y1="20" x2="18" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Integração tecnológica',
    desc: 'CRM operacional com IA, integração LEGALCERT, RWB Telecom e plataforma unificada de gerenciamento de riscos.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2 v4 M12 18 v4 M2 12 h4 M18 12 h4" />
      </svg>
    ),
  },
];

export function Tecnologia() {
  return (
    <section id="tecnologia">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[MONITORAMENTO ROBÓTICO]</span>
          <h2>Security as a Service. Vigilância inteligente e recorrente.</h2>
          <p className="lead">
            Solução SaaS para condomínios residenciais horizontais, condomínios
            rurais, fazendas, resorts, associações e eventos abertos, com
            tecnologia de ativação remota, operação autônoma e resposta rápida
           a incidentes.
          </p>
        </div>

        <div className="tech-grid">
          {ITEMS.map((it) => (
            <div className="tech-card" key={it.title}>
              <div className="tech-illu">{it.svg}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
