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
      </div>
      <figure className="como-funciona-visual">
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/images/como-funciona-processo-1536.webp 1536w, /assets/images/como-funciona-processo.webp 2560w"
            sizes="(min-width: 1400px) 1400px, (min-width: 768px) 92vw, 100vw"
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
    </section>
  );
}
