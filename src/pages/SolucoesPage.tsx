import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { Servicos } from '../components/sections/Servicos';
import { Agentes } from '../components/sections/Agentes';
import { Treinamento } from '../components/sections/Treinamento';

export function SolucoesPage() {
  return (
    <PageMain>
      <SEO
        title="Soluções, iProtector | Proteção, monitoramento e treinamento"
        description="Proteção executiva, monitoramento robótico, banco de protetores e treinamento de elite. Soluções integradas para clientes corporativos e patrimoniais."
        path="/solucoes"
      />
      <Servicos />
      <Agentes />
      <Treinamento />
    </PageMain>
  );
}
