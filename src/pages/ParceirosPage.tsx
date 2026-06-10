import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { Parceiros } from '../components/sections/Parceiros';

export function ParceirosPage() {
  return (
    <PageMain>
      <SEO
        title="Parceiros, iProtector | Rede de empresas de segurança"
        description="Cadastre sua empresa de segurança na rede iProtector. Marketplace nacional, demanda qualificada e operação integrada."
        path="/parceiros"
      />
      <Parceiros />
    </PageMain>
  );
}
