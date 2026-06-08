import { useState } from 'react';

type FaqEntry = { q: string; a: string };

const CLIENT: FaqEntry[] = [
  {
    q: 'O que é o iProtector?',
    a: 'O iProtector é uma plataforma de tecnologia para agenciamento de Proteção Pessoal, Patrimonial e Monitoramento Robótico com Treinamentos de Elite. Conectamos clientes, empresas de segurança, agentes protetores e fornecedores de tecnologias avançadas de gerenciamento de riscos.',
  },
  {
    q: 'Quem pode contratar proteção executiva?',
    a: 'CEOs, empresários, investidores, autoridades, executivos C Level e famílias de alta renda. Oferecemos segurança pessoal armada e desarmada, escolta executiva, proteção familiar, segurança em viagens e eventos privados.',
  },
  {
    q: 'Como funciona o fluxo de contratação?',
    a: 'Cadastro via Website, WhatsApp ou Aplicativo → Análise de Risco → Seleção de Protetores → Contratação → Monitoramento Operacional. Toda a operação é acompanhada pela nossa central 24h.',
  },
  {
    q: 'Quais são os planos de proteção executiva?',
    a: 'Plano Essential (R$ 18k a 25k/mês), Plano Premium (R$ 35k a 60k/mês) e Plano Family Office (R$ 80k a 250k/mês), com escopo, agentes e recursos diferenciados para cada perfil.',
  },
  {
    q: 'O que é o Monitoramento Robótico?',
    a: 'É nossa solução Security as a Service (SaaS) com Drone Dock, Torres de Vigilância, Tags de Rastreamento e Mapeamento Topográfico, para condomínios, fazendas, resorts, associações e eventos abertos.',
  },
  {
    q: 'Vocês oferecem treinamento corporativo?',
    a: 'Sim. O Treinamento de Elite possui três módulos: Protocolos Técnicos, Protocolos Operacionais e Treinamento VIP (Executive Protection). Planos de R$ 15k a R$ 150k conforme o programa.',
  },
  {
    q: 'O iProtector atende em todo o Brasil?',
    a: 'Estamos em expansão nacional estruturada em três fases, iniciando por São Paulo e Brasília, com crescimento para capitais do agronegócio e grandes centros urbanos.',
  },
  {
    q: 'Como funciona o monitoramento após a contratação?',
    a: 'Toda operação conta com SLA inferior a 15 minutos, central 24h, telemetria, relatórios auditáveis e NPS alvo superior a 85. O acompanhamento é contínuo do início ao fim.',
  },
];

const PARTNER: FaqEntry[] = [
  {
    q: 'Como funciona o Banco de Protetores?',
    a: 'Cadastramos vigilantes, escoltas, operadores táticos, veículos blindados e empresas de segurança para compor o maior banco nacional de agentes de proteção sob demanda.',
  },
  {
    q: 'Como cadastrar minha empresa de segurança?',
    a: 'Preencha o formulário de cadastro com CNPJ, alvarás, certificações e comprovação operacional. Após homologação e onboarding, sua empresa integra o fluxo de demanda da plataforma.',
  },
  {
    q: 'O que é a captação de investimentos LEGALCERT?',
    a: 'Em parceria com LEGALCERT, oferecemos captação de investimentos para empresas de segurança, expansão operacional, frota blindada, centros de monitoramento e capital de giro.',
  },
  {
    q: 'Quais documentos são exigidos para captação?',
    a: 'DRE, balanço patrimonial, fluxo de caixa, relatórios de atividades, contratos relevantes, certidões, organograma e carteira de clientes dos últimos 3 anos.',
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
          <h2>Tudo o que você precisa saber sobre o ecossistema iProtector.</h2>
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
