import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Arrow } from '../components/ui/Arrow';
import { ContactForm } from '../components/sections/ContactForm';
import { getWhatsAppUrl } from '../config/site';

const CONTATO_BG_VIDEO = '/assets/videos/contato-bg.mp4';

export function Contato() {
  return (
    <PageMain className="page-main--video-bg page-main--contato">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo src={CONTATO_BG_VIDEO} title="Contato iProtector" />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner container">
        <SEO
          title="Contato, iProtector | Fale com nossa equipe 24h"
          description="Fale com o iProtector. Atendimento comercial, parcerias, imprensa, LGPD e suporte. Central 24h e canais por WhatsApp, email e formulário."
          path="/contato"
        />
        <section className="contact-hero">
          <Link className="back-link" to="/">
            ← Início
          </Link>
          <div className="section-head contact-hero__head">
            <span className="eyebrow">[CONTATO]</span>
            <h1>Estamos prontos para atender. 24 horas por dia.</h1>
            <p className="lead">
              Escolha o canal mais adequado ao seu caso, atendimento comercial,
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
              <div className="email">contato@iprotector.com.br</div>
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
              <div className="email">contato@iprotector.com.br</div>
              <Link className="btn btn-dark btn-sm" to="/parceiros">
                Cadastrar empresa <Arrow />
              </Link>
            </article>

            <article className="contact-card">
              <h4>Suporte ao cliente</h4>
              <p>
                Já é cliente iProtector e precisa de ajuda com algo? Estamos
                aqui.
              </p>
              <div className="email">contato@iprotector.com.br</div>
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
                Solicitações de imprensa, entrevistas, materiais institucionais
                e parcerias estratégicas.
              </p>
              <div className="email">contato@iprotector.com.br</div>
            </article>

            <article className="contact-card">
              <h4>LGPD / Encarregado de Dados</h4>
              <p>Para exercício de direitos relacionados a dados pessoais.</p>
              <div className="email">contato@iprotector.com.br</div>
            </article>

            <article className="contact-card">
              <h4>Emergência operacional</h4>
              <p>
                Já está sendo atendido pelo iProtector e precisa falar com a
                central agora?
              </p>
              <div className="email">Central 24h · +55 (11) 99719-4408</div>
            </article>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-wrap">
            <div className="section-head">
              <span className="eyebrow">[FORMULÁRIO GERAL]</span>
              <h2>Envie uma mensagem.</h2>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-info-grid">
            <div>
              <h4 className="contact-info-label">Sede</h4>
              <p>
                Av. Dr. Chucri Zaidan, 1649
                <br />
                São Paulo / SP · CEP 04711-130
                <br />
                CNPJ 17.738.538/0001-09
              </p>
            </div>
            <div>
              <h4 className="contact-info-label">Horários</h4>
              <p>
                Comercial: segunda a sexta, das 9h às 18h.
                <br />
                Central de operações: 24h por dia, 7 dias por semana.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageMain>
  );
}
