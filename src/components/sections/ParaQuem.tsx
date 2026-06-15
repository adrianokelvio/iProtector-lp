import { Arrow } from '../ui/Arrow';
import { useModals } from '../modals/ModalsContext';

export function ParaQuem() {
  const { openClient, openPartner } = useModals();
  return (
    <section id="para-quem">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">[ECOSSISTEMA]</span>
          <h2>Um ecossistema nacional. Múltiplas jornadas conectadas.</h2>
          <p className="lead">
            O iProtector integra clientes finais, empresas de segurança,
            agentes protetores e fornecedores de tecnologia em uma única
            plataforma, do agenciamento executivo ao monitoramento robótico.
          </p>
        </div>
        <div className="segment-grid">
          <article className="segment-card">
            <span className="tag">[CLIENTE FINAL]</span>
            <h3>Proteção pessoal e patrimonial de elite.</h3>
            <p>
              Para CEOs, empresários, investidores, autoridades, executivos
              C Level e famílias de alta renda que exigem segurança pessoal
              armada ou desarmada, escolta executiva, proteção familiar,
              segurança em viagens e eventos privados.
            </p>
            <ul>
              <li>Segurança pessoal armada e desarmada</li>
              <li>Escolta executiva e proteção familiar</li>
              <li>Segurança em viagens e eventos privados</li>
              <li>Análise de risco e monitoramento operacional</li>
            </ul>
            <button className="btn btn-primary" onClick={openClient}>
              Solicitar proteção pessoal <Arrow />
            </button>
          </article>

          <article className="segment-card">
            <span className="tag">[EMPRESA PARCEIRA]</span>
            <h3>Banco de protetores e rede nacional.</h3>
            <p>
              Para empresas de segurança, vigilantes, operadores táticos,
              locadoras de blindados e fornecedores de tecnologia que desejam
              integrar o maior banco nacional de agentes de proteção para
              atendimento sob demanda.
            </p>
            <ul>
              <li>Cadastro de protetores, escoltas e veículos blindados</li>
              <li>Demanda qualificada via marketplace</li>
              <li>Captação de investimentos via LEGALCERT</li>
              <li>Integração com IA, CRM e tecnologias avançadas</li>
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
