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
          <picture>
            <source
              type="image/webp"
              srcSet="/assets/images/como-funciona-processo-1536.webp 1536w, /assets/images/como-funciona-processo.webp 2560w"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <img
              src="/assets/images/como-funciona-processo.png"
              alt="Infográfico iProtector: cadastro, análise de risco, seleção de protetores e monitoramento operacional 24h"
              width={2560}
              height={1705}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
