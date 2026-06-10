import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { Planos } from '../components/sections/Planos';

export function PlanosPage() {
  return (
    <PageMain>
      <SEO
        title="Planos e preços, iProtector | Proteção executiva e monitoramento"
        description="Planos transparentes para proteção executiva, monitoramento robótico e treinamento de elite. Solicite proposta personalizada."
        path="/planos"
      />
      <Planos />
    </PageMain>
  );
}
