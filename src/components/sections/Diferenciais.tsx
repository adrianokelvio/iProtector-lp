const ITEMS = [
  {
    num: '[01]',
    title: 'Plataforma, não empresa de portaria.',
    desc: 'Não somos uma empresa de vigilância. Somos uma plataforma de tecnologia que conecta demanda qualificada a oferta qualificada.',
  },
  {
    num: '[02]',
    title: 'Rede multi-fornecedor.',
    desc: 'Trabalhamos com várias empresas parceiras — você sempre tem o profissional certo, no momento certo, no lugar certo.',
  },
  {
    num: '[03]',
    title: 'Operação 100% auditável.',
    desc: 'Cada atendimento é registrado, gravado, geolocalizado e disponibilizado para o cliente em forma de relatório.',
  },
  {
    num: '[04]',
    title: 'Tecnologia em campo.',
    desc: 'Drones, bodycams, rastreadores, IoT e integração com câmeras inteligentes urbanas.',
  },
  {
    num: '[05]',
    title: 'Contratação flexível.',
    desc: 'Do acionamento avulso ao contrato enterprise mensal. Você paga pelo que usa.',
  },
  {
    num: '[06]',
    title: 'Padrão único, em qualquer cidade.',
    desc: 'Cliente, atendimento e tecnologia funcionam da mesma forma — independentemente da empresa parceira na ponta.',
  },
];

export function Diferenciais() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[DIFERENCIAIS]</span>
          <h2>
            Por que o iProtector é diferente de uma empresa tradicional de
            segurança.
          </h2>
        </div>

        <div className="diffs">
          {ITEMS.map((d) => (
            <div className="diff" key={d.num}>
              <div className="num">{d.num}</div>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
