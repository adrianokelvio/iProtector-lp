const CRITERIA = [
  {
    title: 'Vigilantes',
    desc: 'Profissionais habilitados para proteção patrimonial, controle de acesso e operações de prevenção.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
        <path d="M9 12 l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Escoltas e operadores táticos',
    desc: 'Agentes especializados em proteção executiva, condução evasiva e resposta a cenários de alto risco.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M5 22 L9 13 L15 13 L19 22" />
      </svg>
    ),
  },
  {
    title: 'Carros blindados',
    desc: 'Frota integrada de veículos blindados com motoristas executivos para transporte e escolta.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="10" width="20" height="8" rx="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: 'Agentes de segurança',
    desc: 'Profissionais certificados para proteção pessoal armada e desarmada em ambientes urbanos e rurais.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21 l-4.5-4.5" />
      </svg>
    ),
  },
  {
    title: 'Empresas de segurança',
    desc: 'Parceiras homologadas com estrutura operacional, equipes treinadas e capacidade de atendimento regional.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="10" width="18" height="11" />
        <path d="M3 10 L12 3 L21 10" />
      </svg>
    ),
  },
  {
    title: 'Atendimento sob demanda',
    desc: 'Rede nacional escalável para mobilização rápida em qualquer cidade ou propriedade do Brasil.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22 s8-6 8-12 a8 8 0 0 0 -16 0 c0 6 8 12 8 12 Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function Agentes() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[BANCO DE PROTETORES]</span>
          <h2>
            O maior banco nacional de agentes de proteção sob demanda.
          </h2>
        </div>
        <div className="agents-wrap">
          <div>
            <p className="lead">
              Construímos a maior rede nacional de profissionais e empresas de
              segurança para atendimento imediato. Vigilantes, escoltas,
              operadores táticos, veículos blindados e empresas parceiras
              cadastrados, homologados e prontos para operação.
            </p>
            <blockquote className="agents-quote">
              Objetivo estratégico: 10.000 protetores cadastrados e 1.000
              empresas parceiras integradas ao ecossistema iProtector até 2030.
            </blockquote>
          </div>

          <div className="agents-grid">
            {CRITERIA.map((c) => (
              <div className="agent-criterion" key={c.title}>
                <div className="icon">{c.svg}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
