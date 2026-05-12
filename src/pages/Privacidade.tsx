import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export function Privacidade() {
  return (
    <main className="container">
      <SEO
        title="Política de Privacidade — iProtector"
        description="Como o iProtector trata dados pessoais em conformidade com a LGPD: coleta, finalidades, bases legais, direitos do titular, retenção e contato com o Encarregado de Dados (DPO)."
        path="/privacidade"
      />
      <article className="legal-page">
        <Link className="back-link" to="/">
          ← Início
        </Link>
        <h1>Política de Privacidade</h1>
        <div className="meta">Última atualização: [data]</div>

        <p>
          A iProtector preza pela privacidade e pela segurança dos dados dos
          seus usuários, clientes finais, empresas parceiras e visitantes. Esta
          Política de Privacidade descreve como tratamos os dados pessoais
          coletados em nossas plataformas (site, aplicativos e painel web), em
          conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
          13.709/2018) e demais normas aplicáveis.
        </p>

        <h2 data-num="01">Quem somos</h2>
        <p>
          O iProtector é uma plataforma de intermediação de serviços de
          segurança privada, inscrita no CNPJ sob o nº{' '}
          <strong>17.738.538/0001-09</strong>, com sede na{' '}
          <strong>
            Av. Dr. Chucri Zaidan, 1649 — Vila São Francisco, São Paulo / SP ·
            04711-130
          </strong>
          . Para fins desta Política, "iProtector", "nós", "nosso" ou "nossa"
          referem-se a essa pessoa jurídica.
        </p>

        <h2 data-num="02">Dados que coletamos</h2>
        <p>
          <strong>2.1 Dados de cadastro e identificação:</strong> nome completo,
          CPF/CNPJ, RG, data de nascimento, e-mail, telefone, endereço.
        </p>
        <p>
          <strong>2.2 Dados profissionais (empresas parceiras e agentes):</strong>{' '}
          razão social, nome fantasia, alvarás, certificações, dados dos
          profissionais cadastrados (incluindo verificação de antecedentes
          mediante consentimento).
        </p>
        <p>
          <strong>2.3 Dados de uso da plataforma:</strong> geolocalização durante
          atendimentos, registros de operação, telemetria, gravações de bodycam
          (quando aplicável), histórico de solicitações e ocorrências.
        </p>
        <p>
          <strong>2.4 Dados de pagamento:</strong> dados financeiros tratados
          por meios de pagamento certificados; o iProtector não armazena dados
          de cartão.
        </p>
        <p>
          <strong>2.5 Dados de navegação:</strong> endereço IP, tipo de
          dispositivo, sistema operacional, dados de uso, cookies e
          identificadores semelhantes.
        </p>

        <h2 data-num="03">Como utilizamos os dados</h2>
        <ul>
          <li>Executar o serviço de intermediação de segurança (operação principal);</li>
          <li>Processar pagamentos e repasses entre as partes;</li>
          <li>Verificar a idoneidade de agentes e empresas parceiras;</li>
          <li>Garantir a segurança da operação e a auditoria das ocorrências;</li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>Comunicar atualizações operacionais e contratuais;</li>
          <li>Enviar comunicações de marketing (mediante consentimento, revogável a qualquer tempo);</li>
          <li>Aperfeiçoar nossas plataformas e serviços.</li>
        </ul>

        <h2 data-num="04">Bases legais para o tratamento</h2>
        <ul>
          <li>Execução de contrato (Art. 7º, V);</li>
          <li>Cumprimento de obrigação legal ou regulatória (Art. 7º, II);</li>
          <li>Legítimo interesse, sempre balanceado com os direitos do titular (Art. 7º, IX);</li>
          <li>Consentimento, quando expressamente coletado (Art. 7º, I);</li>
          <li>Proteção da vida ou da incolumidade física, especialmente em situações operacionais de risco (Art. 7º, VII).</li>
        </ul>

        <h2 data-num="05">Compartilhamento de dados</h2>
        <ul>
          <li>Com empresas de segurança parceiras necessárias à execução do atendimento solicitado;</li>
          <li>Com prestadores de serviço da iProtector (tecnologia, pagamento, comunicação, infraestrutura), submetidos a obrigações contratuais de confidencialidade e segurança;</li>
          <li>Com autoridades públicas, quando legalmente exigido ou requisitado;</li>
          <li>Em operações societárias (fusão, aquisição, reestruturação), respeitando a continuidade desta Política.</li>
        </ul>
        <p>
          <strong>Não vendemos dados pessoais.</strong>
        </p>

        <h2 data-num="06">Transferência internacional de dados</h2>
        <p>
          Eventuais transferências internacionais ocorrem em conformidade com os
          critérios da LGPD e, sempre que necessário, com base em garantias
          contratuais e técnicas adequadas.
        </p>

        <h2 data-num="07">Retenção dos dados</h2>
        <p>
          Mantemos os dados pessoais pelo período necessário ao cumprimento das
          finalidades descritas, observados os prazos legais aplicáveis
          (incluindo prazos prescricionais, fiscais e regulatórios).
        </p>

        <h2 data-num="08">Segurança da informação</h2>
        <ul>
          <li>Criptografia em trânsito e em repouso;</li>
          <li>Controle de acessos baseado em funções;</li>
          <li>Monitoramento contínuo de eventos de segurança;</li>
          <li>Auditorias periódicas;</li>
          <li>Política de mesa limpa, gestão de incidentes e treinamento de equipe.</li>
        </ul>
        <p>
          Em caso de incidente de segurança relevante, comunicaremos a Autoridade
          Nacional de Proteção de Dados (ANPD) e os titulares afetados, nos
          termos da legislação.
        </p>

        <h2 data-num="09">Direitos dos titulares</h2>
        <ul>
          <li>Confirmar a existência de tratamento;</li>
          <li>Acessar seus dados;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>Solicitar a portabilidade;</li>
          <li>Revogar consentimento;</li>
          <li>Opor-se a tratamento realizado com base em legítimo interesse;</li>
          <li>Solicitar informações sobre o compartilhamento;</li>
          <li>Apresentar reclamação à ANPD.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie e-mail ao Encarregado de Dados (DPO)
          em <strong>dpo@iprotector.com.br</strong>.
        </p>

        <h2 data-num="10">Cookies</h2>
        <p>
          Utilizamos cookies para garantir o funcionamento da plataforma, medir
          desempenho, personalizar conteúdo e habilitar funcionalidades. Você
          pode gerenciar suas preferências a qualquer momento pelo banner de
          cookies ou pelas configurações do seu navegador.
        </p>

        <h2 data-num="11">Alterações nesta Política</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. A versão vigente
          está sempre disponível em nosso site, com a data da última
          atualização. Recomendamos a leitura periódica.
        </p>

        <h2 data-num="12" id="contato">
          Contato
        </h2>
        <p>
          <strong>E-mail do DPO:</strong> dpo@iprotector.com.br
          <br />
          <strong>WhatsApp da central:</strong> +55 (11) 99719-4408
          <br />
          <strong>Endereço:</strong> Av. Dr. Chucri Zaidan, 1649 — Vila São
          Francisco, São Paulo / SP · 04711-130
        </p>
      </article>
    </main>
  );
}
