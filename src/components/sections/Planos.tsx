import { useModals } from '../modals/ModalsContext';

const MODELS = [
  {
    num: '[01]',
    title: 'Sob demanda',
    desc: 'Contratação instantânea para situações pontuais — um evento, um deslocamento, uma visita.',
  },
  {
    num: '[02]',
    title: 'Assinaturas recorrentes',
    desc: 'Planos mensais com benefícios, tarifas reduzidas e prioridade na fila de atendimento.',
  },
  {
    num: '[03]',
    title: 'Contratos corporativos',
    desc: 'Operação contínua para empresas, condomínios, fazendas, hotéis e estruturas que exigem presença mensal.',
  },
  {
    num: '[04]',
    title: 'Operações especiais',
    desc: 'Mobilização de campo para eventos de grande porte, ações sensíveis e missões dedicadas.',
  },
];

export function Planos() {
  const { openClient } = useModals();
  return (
    <section id="planos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[MODELOS DE CONTRATAÇÃO]</span>
          <h2>Sob demanda, recorrente ou corporativo. Você escolhe.</h2>
          <p className="lead">
            Cada cliente tem uma necessidade diferente. Por isso o iProtector
            opera em quatro modelos de atendimento, combinados ou contratados
            de forma independente.
          </p>
        </div>

        <div className="models-row">
          {MODELS.map((m) => (
            <div className="model" key={m.num}>
              <div className="num">{m.num}</div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="plans">
          <article className="plan">
            <div className="plan-name">Plano Silver</div>
            <div className="plan-price">
              R$ 59<small> /mês</small>
            </div>
            <ul>
              <li>Acesso completo ao app</li>
              <li>Tarifas reduzidas por acionamento</li>
              <li>Suporte padrão da central 24h</li>
              <li>Histórico e relatórios básicos</li>
              <li>Botão de pânico digital</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Assinar Silver
            </button>
          </article>
          <article className="plan featured">
            <span className="pop-badge">[MAIS POPULAR]</span>
            <div className="plan-name">Plano Gold</div>
            <div className="plan-price">
              R$ 149<small> /mês</small>
            </div>
            <ul>
              <li>Tudo do Silver</li>
              <li>Tarifas ainda mais reduzidas</li>
              <li>Resposta prioritária da central</li>
              <li>Rede de agentes preferenciais</li>
              <li>Relatórios completos</li>
              <li>Canal de atendimento dedicado</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Assinar Gold
            </button>
          </article>
          <article className="plan">
            <div className="plan-name">Plano Black</div>
            <div className="plan-price">
              R$ 499<small> /mês</small>
            </div>
            <ul>
              <li>Tudo do Gold</li>
              <li>Canal exclusivo para emergências</li>
              <li>Agentes específicos pré-designados</li>
              <li>Funcionalidades avançadas do painel</li>
              <li>Atendimento concierge</li>
              <li>Relatórios executivos personalizados</li>
            </ul>
            <button className="btn btn-dark" onClick={openClient}>
              Assinar Black
            </button>
          </article>
        </div>

        <p className="plans-footer">
          Para volumes corporativos, condomínios, fazendas e eventos, oferecemos
          contratos enterprise sob medida.{' '}
          <button type="button" className="link-button gold-link" onClick={openClient}>
            Falar com especialista →
          </button>
        </p>
      </div>
    </section>
  );
}
