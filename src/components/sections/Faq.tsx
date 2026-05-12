import { useState } from 'react';

type FaqEntry = { q: string; a: string };

const CLIENT: FaqEntry[] = [
  {
    q: 'O iProtector é uma empresa de segurança?',
    a: 'Não. O iProtector é uma plataforma de intermediação que conecta clientes a empresas de segurança parceiras altamente qualificadas. Operamos com tecnologia, central 24h e rede homologada — mas a execução em campo é feita por empresas e agentes credenciados na nossa rede.',
  },
  {
    q: 'Como sei que o agente que vai me atender é confiável?',
    a: 'Cada agente da rede iProtector passa por verificação completa de antecedentes, avaliação psicológica, certificação obrigatória e auditoria contínua. Você recebe no app o nome, foto e identificação do profissional antes do atendimento.',
  },
  {
    q: 'Posso contratar para um único evento?',
    a: 'Sim. O modelo sob demanda permite contratação pontual — para um evento, um deslocamento, uma visita ou um período específico. Sem fidelidade, sem mensalidade obrigatória.',
  },
  {
    q: 'E se eu precisar de proteção contínua?',
    a: 'Para necessidades recorrentes, você pode optar por uma assinatura mensal (Silver, Gold ou Black) ou por um contrato corporativo, com escopo, prazo e SLA definidos.',
  },
  {
    q: 'O atendimento é armado?',
    a: 'Depende do escopo da operação, do tipo de risco envolvido e da legislação aplicável. A iProtector e suas empresas parceiras operam estritamente dentro do marco legal brasileiro. O nível de armamento é definido no escopo do atendimento.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Atendimentos avulsos são cobrados via app (cartão, Pix ou cobrança). Assinaturas têm débito recorrente. Contratos corporativos são faturados conforme contrato.',
  },
  {
    q: 'Vocês atendem em todo o Brasil?',
    a: 'A cobertura cresce continuamente, conforme novas empresas parceiras são homologadas. Consulte a disponibilidade da sua região no app ou pelo WhatsApp.',
  },
  {
    q: 'Posso cancelar um atendimento?',
    a: 'Sim. As regras de cancelamento e reembolso variam por modelo de contratação e estão descritas nos Termos de Uso.',
  },
];

const PARTNER: FaqEntry[] = [
  {
    q: 'Como funciona o cadastro de uma empresa parceira?',
    a: 'Você preenche o formulário de cadastro, envia documentação (CNPJ, alvarás, certificações, comprovação operacional) e passa por homologação da nossa equipe. Aprovada, sua empresa entra no fluxo de demanda da plataforma.',
  },
  {
    q: 'Tenho que dar exclusividade?',
    a: 'Não. A parceria com o iProtector não é exclusiva — sua empresa continua operando seus contratos próprios. O iProtector é uma camada adicional de demanda e padrão operacional.',
  },
  {
    q: 'Como funciona o repasse financeiro?',
    a: 'O iProtector centraliza o recebimento do cliente final e repassa à empresa parceira o valor combinado, deduzido o take rate (15% a 30%, conforme tipo de operação). O ciclo é transparente, com extrato detalhado no painel.',
  },
  {
    q: 'Posso usar minha própria marca nos uniformes?',
    a: 'Sim. O iProtector preserva a identidade operacional das empresas parceiras. O padrão exigido é de qualidade, conduta, tempo de resposta e uso da plataforma — não substituição de marca.',
  },
];

function FaqList({ items }: { items: FaqEntry[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={item.q}>
          <button
            className="faq-q"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            {item.q}
            <span className="plus">+</span>
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Faq() {
  const [tab, setTab] = useState<'cliente' | 'parceiro'>('cliente');

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[FAQ]</span>
          <h2>Tudo o que você precisa saber antes de contratar.</h2>
        </div>

        <div className="faq-tabs" role="tablist">
          <button
            className={`faq-tab ${tab === 'cliente' ? 'active' : ''}`}
            onClick={() => setTab('cliente')}
            role="tab"
            aria-selected={tab === 'cliente'}
          >
            Cliente final
          </button>
          <button
            className={`faq-tab ${tab === 'parceiro' ? 'active' : ''}`}
            onClick={() => setTab('parceiro')}
            role="tab"
            aria-selected={tab === 'parceiro'}
          >
            Empresa parceira
          </button>
        </div>

        <FaqList items={tab === 'cliente' ? CLIENT : PARTNER} />
      </div>
    </section>
  );
}
