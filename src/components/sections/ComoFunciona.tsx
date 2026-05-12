const STEPS = [
  {
    n: '1º PASSO',
    title: 'Você solicita pelo app ou plataforma web.',
    desc: 'Em poucos cliques, você informa o tipo de proteção, local, duração e nível de prioridade. Nada de ligação, espera ou burocracia.',
  },
  {
    n: '2º PASSO',
    title: 'O sistema identifica a operação ideal.',
    desc: 'A plataforma cruza geolocalização, perfil da ocorrência, tipo de necessidade e disponibilidade de agentes em tempo real para definir a melhor resposta possível.',
  },
  {
    n: '3º PASSO',
    title: 'Um profissional qualificado entra em campo.',
    desc: 'Um agente próximo, certificado e dentro do perfil exigido é acionado automaticamente. Você acompanha o deslocamento e tem o nome, foto e identificação no app.',
  },
  {
    n: '4º PASSO',
    title: 'A nossa central acompanha tudo em tempo real.',
    desc: 'Toda a operação é supervisionada pelo Command Center 24h, com telemetria, registro de ocorrência, bodycam quando aplicável e relatório completo ao final.',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[COMO FUNCIONA]</span>
          <h2>Quatro passos. Uma operação inteira por trás.</h2>
          <p className="lead">
            Cada atendimento iProtector é orquestrado de ponta a ponta — do
            clique no app até o registro auditável da ocorrência.
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
      </div>
    </section>
  );
}
