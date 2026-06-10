import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { ComoFunciona } from '../components/sections/ComoFunciona';

export function ComoFuncionaPage() {
  return (
    <PageMain>
      <SEO
        title="Como funciona, iProtector | Marketplace de segurança"
        description="Entenda como o iProtector conecta clientes, empresas de segurança e agentes protetores em uma plataforma nacional de proteção e monitoramento."
        path="/como-funciona"
      />
      <ComoFunciona />
    </PageMain>
  );
}
