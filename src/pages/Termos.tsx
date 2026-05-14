import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export function Termos() {
  return (
    <main className="container">
      <SEO
        title="Termos de Uso — iProtector"
        description="Termos de uso da plataforma iProtector: objeto, cadastro, modelos de contratação, obrigações, responsabilidades, pagamentos, cancelamento, propriedade intelectual e lei aplicável."
        path="/termos"
      />
      <article className="legal-page">
        <Link className="back-link" to="/">
          ← Início
        </Link>
        <h1>Termos de Uso</h1>
        <div className="meta">Última atualização: [data]</div>

        <p>
          Estes Termos de Uso ("Termos") regulam o acesso e a utilização da
          plataforma iProtector — incluindo site, aplicativo móvel e painel web
          ("Plataforma") — operada pela pessoa jurídica inscrita no CNPJ sob o
          nº <strong>17.738.538/0001-09</strong>, com sede na{' '}
          <strong>
            Av. Dr. Chucri Zaidan, 1649 · São Paulo / SP · CEP 04711-130
          </strong>{' '}
          ("iProtector", "nós").
        </p>
        <p>
          Ao acessar ou utilizar a Plataforma, você ("Usuário") declara ter
          lido, compreendido e aceitado integralmente estes Termos.
        </p>

        <h2 data-num="01">Objeto da Plataforma</h2>
        <p>
          O iProtector é uma plataforma de tecnologia que intermedeia a
          contratação de serviços de segurança privada entre clientes finais e
          empresas de segurança parceiras devidamente homologadas. O iProtector{' '}
          <strong>não executa diretamente os serviços de segurança em campo</strong>
          : a execução é realizada por empresas parceiras, certificadas conforme
          legislação aplicável.
        </p>

        <h2 data-num="02">Cadastro e elegibilidade</h2>
        <p>
          <strong>2.1</strong> O cadastro na Plataforma exige o fornecimento de
          informações verdadeiras, completas e atualizadas.
        </p>
        <p>
          <strong>2.2</strong> É vedado o cadastro de menores de 18 anos, salvo
          mediante representação legal e nos casos especificamente permitidos.
        </p>
        <p>
          <strong>2.3</strong> Empresas parceiras devem atender aos requisitos
          legais para operação no setor de segurança privada, incluindo alvará
          da Polícia Federal e certificações exigidas.
        </p>
        <p>
          <strong>2.4</strong> O iProtector pode recusar, suspender ou encerrar
          contas que violem estes Termos, a legislação aplicável ou os padrões
          operacionais da Plataforma.
        </p>

        <h2 data-num="03">Modelos de contratação</h2>
        <ul>
          <li>Sob demanda (acionamento avulso);</li>
          <li>Assinaturas recorrentes (planos Silver, Gold ou Black);</li>
          <li>Contratos corporativos (enterprise);</li>
          <li>Operações especiais (eventos e missões dedicadas).</li>
        </ul>
        <p>
          Cada modelo possui condições específicas de preço, prazo, cancelamento
          e SLA, descritas no momento da contratação.
        </p>

        <h2 data-num="04">Obrigações do Usuário cliente</h2>
        <p>
          <strong>4.1</strong> Fornecer informações verdadeiras durante a
          solicitação do serviço.
        </p>
        <p>
          <strong>4.2</strong> Tratar os agentes com respeito e dentro dos
          parâmetros legais.
        </p>
        <p>
          <strong>4.3</strong> Não utilizar a Plataforma para finalidades
          ilícitas, discriminatórias, fraudulentas ou contrárias à ordem
          pública.
        </p>
        <p>
          <strong>4.4</strong> Realizar os pagamentos devidos nos prazos e
          condições contratados.
        </p>

        <h2 data-num="05">Obrigações das empresas parceiras</h2>
        <p>
          <strong>5.1</strong> Manter sua documentação legal, alvarás e
          certificações regulares e atualizadas.
        </p>
        <p>
          <strong>5.2</strong> Cumprir os padrões operacionais do iProtector,
          incluindo uso da Plataforma, registro de ocorrências e protocolos da
          central 24h.
        </p>
        <p>
          <strong>5.3</strong> Garantir que os agentes designados estejam
          devidamente qualificados, treinados e em condições físicas e
          psicológicas adequadas.
        </p>
        <p>
          <strong>5.4</strong> Manter sigilo absoluto sobre informações dos
          clientes finais.
        </p>

        <h2 data-num="06">Responsabilidade do iProtector</h2>
        <p>
          <strong>6.1</strong> O iProtector é responsável pela operação,
          manutenção e segurança da Plataforma, pelo padrão da central 24h, pelo
          processamento de pagamentos e pelo cumprimento da LGPD.
        </p>
        <p>
          <strong>6.2</strong> O iProtector não se responsabiliza por atos
          isolados de empresas parceiras ou agentes em desconformidade com os
          padrões contratuais, sendo, contudo, responsável por aplicar medidas
          corretivas, sanções e exclusão da rede em casos comprovados de
          violação.
        </p>
        <p>
          <strong>6.3</strong> O iProtector mantém mecanismos contínuos de
          auditoria, avaliação e melhoria da rede.
        </p>

        <h2 data-num="07">Pagamentos e repasses</h2>
        <p>
          <strong>7.1</strong> Os pagamentos são processados por meio de
          provedores certificados.
        </p>
        <p>
          <strong>7.2</strong> O iProtector centraliza o recebimento do cliente
          final e realiza o repasse à empresa parceira, deduzido o take rate
          aplicável (15% a 30%, conforme o tipo de operação).
        </p>
        <p>
          <strong>7.3</strong> Em caso de não execução do serviço por motivo
          atribuível ao iProtector ou à empresa parceira, o cliente terá direito
          a reembolso conforme regras específicas do modelo contratado.
        </p>

        <h2 data-num="08">Cancelamento e reembolso</h2>
        <p>
          As condições de cancelamento variam conforme o modelo de contratação e
          são apresentadas ao Usuário no momento da contratação. Regras
          detalhadas estão disponíveis na Central de Ajuda.
        </p>

        <h2 data-num="09">Propriedade intelectual</h2>
        <p>
          A marca, logotipo, layout, código-fonte, conteúdo, design e quaisquer
          outros elementos da Plataforma são de propriedade exclusiva do
          iProtector e estão protegidos pela legislação aplicável. É vedado o
          uso, reprodução, distribuição ou modificação sem autorização expressa.
        </p>

        <h2 data-num="10">Limitação de responsabilidade</h2>
        <p>
          Na máxima extensão permitida pela lei, o iProtector não responde por
          danos indiretos, lucros cessantes ou eventos de força maior, observada
          a responsabilidade própria da Plataforma quanto à operação digital, à
          segurança da informação e à conduta da central 24h.
        </p>

        <h2 data-num="11">Alterações dos Termos</h2>
        <p>
          Os Termos podem ser atualizados periodicamente. Alterações relevantes
          serão comunicadas pelos canais oficiais. O uso continuado da
          Plataforma após a comunicação caracteriza aceitação dos novos Termos.
        </p>

        <h2 data-num="12">Lei aplicável e foro</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil.
          Fica eleito o foro da Comarca de <strong>São Paulo / SP</strong> para
          dirimir quaisquer controvérsias decorrentes destes Termos, salvo
          disposição legal em sentido diverso.
        </p>

        <h2 data-num="13">Contato</h2>
        <p>
          <strong>E-mail:</strong> contato@iprotector.com.br
          <br />
          <strong>WhatsApp:</strong> +55 (11) 99719-4408
          <br />
          <strong>Endereço:</strong> Av. Dr. Chucri Zaidan, 1649 · São Paulo /
          SP · CEP 04711-130
        </p>
      </article>
    </main>
  );
}
