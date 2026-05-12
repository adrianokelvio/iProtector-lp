import { Link } from 'react-router-dom';
import { Arrow } from '../components/ui/Arrow';
import { ContactForm } from '../components/sections/ContactForm';
import { getWhatsAppUrl } from '../config/site';

export function Contato() {
  return (
    <main className="container">
      <section style={{ padding: '140px 0 60px' }}>
        <Link className="back-link" to="/">
          ← Início
        </Link>
        <div className="section-head" style={{ marginTop: 24 }}>
          <span className="eyebrow">Fale com o iProtector</span>
          <h1>Estamos prontos para atender. 24 horas por dia.</h1>
          <p className="lead">
            Escolha o canal mais adequado ao seu caso — atendimento comercial,
            parcerias, imprensa, suporte ou emergência operacional.
          </p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h4>Quero contratar proteção</h4>
            <p>
              Fale com um especialista comercial e contrate o serviço ideal
              para o seu caso.
            </p>
            <div className="email">comercial@iprotector.com.br</div>
            <a
              className="btn btn-primary btn-sm"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp <Arrow />
            </a>
          </article>

          <article className="contact-card">
            <h4>Sou empresa de segurança</h4>
            <p>
              Cadastre sua empresa na rede iProtector e amplie sua operação.
            </p>
            <div className="email">parcerias@iprotector.com.br</div>
            <Link className="btn btn-dark btn-sm" to="/#parceiros">
              Cadastrar empresa <Arrow />
            </Link>
          </article>

          <article className="contact-card">
            <h4>Suporte ao cliente</h4>
            <p>
              Já é cliente iProtector e precisa de ajuda com algo? Estamos
              aqui.
            </p>
            <div className="email">suporte@iprotector.com.br</div>
            <a
              className="btn btn-dark btn-sm"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com o suporte
            </a>
          </article>

          <article className="contact-card">
            <h4>Imprensa e institucional</h4>
            <p>
              Solicitações de imprensa, entrevistas, materiais institucionais e
              parcerias estratégicas.
            </p>
            <div className="email">imprensa@iprotector.com.br</div>
          </article>

          <article className="contact-card">
            <h4>LGPD / Encarregado de Dados</h4>
            <p>Para exercício de direitos relacionados a dados pessoais.</p>
            <div className="email">dpo@iprotector.com.br</div>
          </article>

          <article className="contact-card">
            <h4>Emergência operacional</h4>
            <p>
              Já está sendo atendido pelo iProtector e precisa falar com a
              central agora?
            </p>
            <div className="email">central 24h · [número direto]</div>
          </article>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div style={{ maxWidth: 720 }}>
          <div className="section-head">
            <span className="eyebrow">Formulário geral</span>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
              Envie uma mensagem.
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <section
        style={{
          paddingBottom: 100,
          borderTop: '1px solid var(--line)',
        }}
      >
        <div
          className="contact-info-grid"
          style={{ paddingTop: 60 }}
        >
          <div>
            <h4 className="contact-info-label">Sede</h4>
            <p style={{ fontSize: 15 }}>
              [Endereço completo]
              <br />
              CNPJ: [a preencher]
            </p>
          </div>
          <div>
            <h4 className="contact-info-label">Horários</h4>
            <p style={{ fontSize: 15 }}>
              Comercial: segunda a sexta, das 9h às 18h.
              <br />
              Central de operações: 24h por dia, 7 dias por semana.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
