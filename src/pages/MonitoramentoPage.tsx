import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Tecnologia } from '../components/sections/Tecnologia';

const MONITORAMENTO_BG_VIDEO = '/assets/videos/parceiros-bg.mp4';

export function MonitoramentoPage() {
  return (
    <PageMain className="page-main--video-bg page-main--monitoramento">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo
          src={MONITORAMENTO_BG_VIDEO}
          title="Monitoramento iProtector"
        />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="Monitoramento robótico, iProtector | Security as a Service"
          description="Drone Dock, torres inteligentes e central 24h. Monitoramento patrimonial recorrente com tecnologia robótica e operação SaaS."
          path="/monitoramento"
        />
        <Tecnologia />
      </div>
    </PageMain>
  );
}
