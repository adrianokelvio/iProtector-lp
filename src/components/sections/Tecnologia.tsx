import { useState, type ReactNode } from 'react';
import { ModalShell } from '../ui/ModalShell';

type TechItem = {
  title: string;
  desc: string;
  svg: ReactNode;
  body: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

const ITEMS: TechItem[] = [
  {
    title: 'Drone Dock',
    desc: 'Ativação remota, operação autônoma, vigilância aérea e resposta rápida a invasões, incêndios, furtos e monitoramento perimetral.',
    body: 'O Drone Dock é uma estação automatizada de decolagem, pouso e recarga — o modelo "drone in a box". A central iProtector aciona o equipamento remotamente, sem necessidade de operador no local, para vigilância aérea contínua e resposta rápida a incidentes.',
    highlights: [
      'Ativação remota e operação autônoma 24h',
      'Vigilância aérea e monitoramento perimetral',
      'Resposta a invasões, incêndios e furtos',
      'Recarga automática entre missões',
      'Ideal para condomínios, fazendas e resorts',
    ],
    image: '/assets/images/drone-dock.png',
    imageAlt:
      'Drone Dock iProtector — estação automatizada com drone, controle remoto e base de recarga',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="12" cy="12" r="2" />
        <line x1="8" y1="8" x2="11" y2="11" />
        <line x1="16" y1="8" x2="13" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Torres de vigilância',
    desc: 'Altura de 30m, alcance até 10 km, rotação 360°, câmeras térmicas, infravermelho e operação remota para fazendas, condomínios, resorts e eventos.',
    body: 'Torres inteligentes de alta performance para cobertura visual em grandes áreas. Com câmeras térmicas, infravermelho e rotação completa, ampliam o alcance do monitoramento patrimonial em propriedades rurais, condomínios horizontais e eventos abertos.',
    highlights: [
      'Altura de até 30 m e alcance visual de 10 km',
      'Rotação 360° com câmeras térmicas e IR',
      'Operação remota pela central iProtector',
      'Detecção de intrusão em perímetros extensos',
      'Indicada para fazendas, resorts e eventos',
    ],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 v20 M8 6 h8 M7 10 h10 M6 14 h12 M5 18 h14" />
      </svg>
    ),
  },
  {
    title: 'Tags de rastreamento',
    desc: 'Geolocalização, alertas automáticos e histórico operacional para veículos, máquinas, equipamentos, animais e ativos críticos.',
    body: 'Dispositivos de rastreamento com geolocalização em tempo real integrados à plataforma iProtector. Permitem monitorar ativos móveis e críticos, com alertas automáticos e histórico completo para auditoria operacional.',
    highlights: [
      'Geolocalização em tempo real via GPS',
      'Alertas de saída de perímetro e movimentação',
      'Histórico operacional para auditoria',
      'Rastreamento de veículos, máquinas e equipamentos',
      'Monitoramento de animais e ativos críticos',
    ],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22 s8-6 8-12 a8 8 0 0 0 -16 0 c0 6 8 12 8 12 Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Mapeamento topográfico',
    desc: 'Mapeamento com drones, georreferenciamento, análise de vulnerabilidades e planejamento de segurança para grandes propriedades.',
    body: 'Levantamento aéreo profissional com drones para mapear terrenos extensos. Gera modelos georreferenciados que identificam vulnerabilidades, pontos cegos e rotas de acesso — base para planejamento de segurança patrimonial.',
    highlights: [
      'Mapeamento aéreo com drones profissionais',
      'Georreferenciamento e modelos do terreno',
      'Análise de vulnerabilidades e pontos cegos',
      'Planejamento de perímetros e rotas de patrulha',
      'Essencial para fazendas e grandes propriedades',
    ],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18 L9 10 L14 14 L21 6" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Central de monitoramento',
    desc: 'Security as a Service recorrente para condomínios, fazendas, resorts, associações e eventos abertos, com operação 24h.',
    body: 'Núcleo operacional do Security as a Service iProtector. Equipe especializada monitora câmeras, sensores, drones e tags 24 horas por dia, acionando protocolos de resposta e registrando todas as ocorrências.',
    highlights: [
      'Operação 24h com equipe especializada',
      'Monitoramento integrado de todos os dispositivos',
      'Security as a Service com mensalidade recorrente',
      'Registro completo de ocorrências e alertas',
      'Atende condomínios, fazendas, resorts e eventos',
    ],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="6" y1="20" x2="18" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Integração tecnológica',
    desc: 'CRM operacional com IA, integração LEGALCERT, RWB Telecom e plataforma unificada de gerenciamento de riscos.',
    body: 'Ecossistema tecnológico que conecta clientes, empresas parceiras e fornecedores em uma plataforma única. CRM operacional com IA, integrações estratégicas e gestão unificada de riscos para operações de segurança em escala.',
    highlights: [
      'CRM operacional com inteligência artificial',
      'Integração com LEGALCERT e RWB Telecom',
      'Plataforma unificada de gerenciamento de riscos',
      'Conecta demanda, parceiros e fornecedores',
      'Automação de fluxos e relatórios operacionais',
    ],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2 v4 M12 18 v4 M2 12 h4 M18 12 h4" />
      </svg>
    ),
  },
];

export function Tecnologia() {
  const [selected, setSelected] = useState<TechItem | null>(null);

  return (
    <section id="tecnologia">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[MONITORAMENTO ROBÓTICO]</span>
          <h2>Security as a Service. Vigilância inteligente e recorrente.</h2>
          <p className="lead">
            Solução SaaS para condomínios residenciais horizontais, condomínios
            rurais, fazendas, resorts, associações e eventos abertos, com
            tecnologia de ativação remota, operação autônoma e resposta rápida
            a incidentes.
          </p>
        </div>

        <div className="tech-grid">
          {ITEMS.map((it) => (
            <button
              type="button"
              className="tech-card"
              key={it.title}
              onClick={() => setSelected(it)}
              aria-label={`Saiba mais sobre ${it.title}`}
            >
              <div className="tech-illu">{it.svg}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
              <span className="tech-card__cta">Saiba mais →</span>
            </button>
          ))}
        </div>
      </div>

      <ModalShell
        id="modal-tech"
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <div className="tech-modal">
            {selected.image ? (
              <figure className="tech-modal__figure">
                <img
                  src={selected.image}
                  alt={selected.imageAlt ?? selected.title}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ) : (
              <div className="tech-modal__icon">{selected.svg}</div>
            )}
            <h3>{selected.title}</h3>
            <p className="sub">{selected.body}</p>
            <ul className="tech-modal__list">
              {selected.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </ModalShell>
    </section>
  );
}
