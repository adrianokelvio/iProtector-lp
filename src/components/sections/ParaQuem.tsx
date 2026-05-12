import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

export function ParaQuem() {
  const { openClient, openPartner } = useModals();
  return (
    <section id="para-quem">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Para quem é o iProtector</span>
          <h2>Duas jornadas. Uma única plataforma de proteção.</h2>
        </div>
        <div className="segment-grid">
          <article className="segment-card">
            <span className="tag">Cliente final</span>
            <h3>Para você, sua família ou sua empresa.</h3>
            <p>
              Solicite um agente de segurança qualificado para um evento, um
              deslocamento, sua residência, sua fazenda, sua propriedade ou um
              momento específico. Em poucos cliques, você tem ao seu lado um
              profissional treinado, monitorado por nossa central 24h e
              respaldado por toda a tecnologia operacional do iProtector.
            </p>
            <ul>
              <li>Contratação sob demanda ou recorrente</li>
              <li>Agentes certificados e auditados</li>
              <li>Acompanhamento em tempo real</li>
              <li>Histórico completo de cada atendimento</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Solicitar proteção <Arrow />
            </button>
          </article>

          <article className="segment-card">
            <span className="tag">Empresa parceira</span>
            <h3>Para empresas de segurança que querem escalar.</h3>
            <p>
              Sua empresa tem agentes qualificados, estrutura operacional e
              capacidade ociosa. O iProtector traz a demanda. Conecte sua
              operação à nossa plataforma e passe a receber atendimentos com
              fluxo organizado, pagamento garantido e padrão operacional
              unificado — sem perder a sua marca interna.
            </p>
            <ul>
              <li>Demanda qualificada e segmentada</li>
              <li>Repasse transparente por atendimento</li>
              <li>Operação integrada à central iProtector</li>
              <li>Auditoria, telemetria e relatórios incluídos</li>
            </ul>
            <button className="btn btn-ghost" onClick={openPartner}>
              Quero ser parceiro <Arrow />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
