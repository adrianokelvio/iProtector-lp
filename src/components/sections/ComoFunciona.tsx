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
        <figure className="como-funciona-visual">
          <img
            src="/assets/images/como-funciona-processo.png"
            alt="Infográfico iProtector: cadastro, análise de risco, seleção de protetores e monitoramento operacional 24h"
            loading="eager"
            fetchPriority="high"
            width={1536}
            height={1024}
          />
        </figure>
      </div>
    </section>
  );
}
