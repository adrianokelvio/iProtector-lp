const CRITERIA = [
  {
    title: 'Certificação obrigatória',
    desc: 'Profissionais com formação reconhecida e habilitação válida para a função.',
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
    title: 'Verificação de antecedentes',
    desc: 'Investigação criminal, civil e de histórico profissional antes da inclusão na rede.',
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
    title: 'Avaliação psicológica',
    desc: 'Perfil testado para conduta em situações de estresse, conflito e exposição.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 a4 4 0 0 1 4 4 v3 a4 4 0 0 1 -8 0 v-3 a4 4 0 0 1 4 -4 Z" />
        <path d="M5 21 c1-4 5-6 7-6 s6 2 7 6" />
      </svg>
    ),
  },
  {
    title: 'Treinamento contínuo',
    desc: 'Reciclagens em defesa, primeiros socorros, condução evasiva, atendimento e LGPD.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7 h16 M4 12 h16 M4 17 h10" />
      </svg>
    ),
  },
  {
    title: 'Auditorias operacionais',
    desc: 'Avaliação por cliente e supervisão técnica em cada atendimento prestado.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12 l4 4 l4-8 l4 6 l4-2 l2 4" />
      </svg>
    ),
  },
  {
    title: 'Exames periódicos',
    desc: 'Manutenção das condições físicas e mentais mínimas para atuação em campo.',
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7 v5 l3 2" />
      </svg>
    ),
  },
];

export function Agentes() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[AGENTES CERTIFICADOS]</span>
          <h2>
            Agentes selecionados para um padrão que não negocia qualidade.
          </h2>
        </div>
        <div className="agents-wrap">
          <div>
            <p className="lead">
              Toda operação iProtector é executada por profissionais experientes,
              treinados e rigorosamente selecionados. Não basta ter um currículo:
              cada agente da nossa rede passa por um filtro técnico, psicológico
              e operacional contínuo.
            </p>
            <blockquote className="agents-quote">
              Agentes habilitados para atuar com presença, prevenção, resposta
              rápida e conduta técnica em qualquer ambiente — do evento privado
              à propriedade rural, da residência ao deslocamento executivo.
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
