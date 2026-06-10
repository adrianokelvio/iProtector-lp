import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { Tecnologia } from '../components/sections/Tecnologia';

export function MonitoramentoPage() {
  return (
    <PageMain>
      <SEO
        title="Monitoramento robótico, iProtector | Security as a Service"
        description="Drone Dock, torres inteligentes e central 24h. Monitoramento patrimonial recorrente com tecnologia robótica e operação SaaS."
        path="/monitoramento"
      />
      <Tecnologia />
    </PageMain>
  );
}
