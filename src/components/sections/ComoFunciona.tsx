const STEPS = [
  {
    n: '1º PASSO',
    title: 'Cadastro via Website, WhatsApp ou Aplicativo.',
    desc: 'O cliente final preenche o formulário digital informando perfil, necessidade de proteção, local e contexto operacional, sem burocracia.',
  },
  {
    n: '2º PASSO',
    title: 'Análise de risco personalizada.',
    desc: 'Nossa equipe avalia o cenário, o nível de exposição e os requisitos técnicos para definir o protocolo ideal de proteção.',
  },
  {
    n: '3º PASSO',
    title: 'Seleção de protetores qualificados.',
    desc: 'A plataforma identifica no banco nacional o agente, a equipe ou a empresa parceira mais adequada ao perfil da operação.',
  },
  {
    n: '4º PASSO',
    title: 'Contratação e monitoramento operacional.',
    desc: 'Após a contratação, toda a operação é acompanhada em tempo real, com central 24h, telemetria, relatórios e SLA garantido.',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[COMO FUNCIONA]</span>
          <h2>Do cadastro ao monitoramento. Uma operação completa.</h2>
          <p className="lead">
            Cada atendimento iProtector segue um fluxo estruturado, da
            solicitação inicial à supervisão contínua da operação em campo.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < STEPS.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>
        <figure className="como-funciona-visual">
          <img
            src="/assets/images/monitoring-center.jpg"
            alt="Operadores em central de monitoramento com parede de telas exibindo câmeras de vigilância em tempo real"
            loading="eager"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <figcaption>
            Central de monitoramento iProtector — supervisão 24h, telemetria e
            acompanhamento operacional em tempo real.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
