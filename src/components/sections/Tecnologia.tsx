const ITEMS = [
  {
    title: 'Aplicativo do cliente',
    desc: 'Solicitação, acompanhamento, pagamento, histórico, relatórios e botão de pânico em um único lugar.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <line x1="10" y1="18" x2="14" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Painel web corporativo',
    desc: 'Gerencie múltiplos endereços, agentes, ocorrências e centros de custo em um único dashboard.',
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
    title: 'Botão de ação imediata',
    desc: 'Físico ou digital, individual ou corporativo, com acionamento direto na central 24h.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Drones homologados',
    desc: 'Vigilância aérea, mapeamento de perímetro e suporte a eventos e operações de campo.',
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
    title: 'Rastreamento',
    desc: 'Geolocalização pessoal e veicular para escolta, transporte de valores e operações sensíveis.',
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
    title: 'Integração Smart Sampa',
    desc: 'Acesso a câmeras inteligentes com reconhecimento facial — uma das maiores redes de monitoramento da América Latina.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="6" width="14" height="12" rx="1" />
        <path d="M17 10 L22 7 V17 L17 14 Z" />
      </svg>
    ),
  },
];

export function Tecnologia() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[PLATAFORMA + CAMPO]</span>
          <h2>Cada agente em campo. Toda a operação na sua tela.</h2>
          <p className="lead">
            O iProtector é, antes de tudo, uma plataforma de tecnologia que
            organiza segurança como serviço. Isso significa que cada
            atendimento é digitalizado, auditável e mensurável — para o cliente
            final, para a empresa contratante e para a central de operações.
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
