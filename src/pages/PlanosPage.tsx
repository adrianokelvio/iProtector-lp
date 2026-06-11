import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Planos } from '../components/sections/Planos';

const PLANOS_BG_VIDEO = '/assets/videos/planos-bg.mp4';

export function PlanosPage() {
  return (
    <PageMain className="page-main--video-bg page-main--planos">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo src={PLANOS_BG_VIDEO} title="Planos iProtector" />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="Planos e preços, iProtector | Proteção executiva e monitoramento"
          description="Planos transparentes para proteção executiva, monitoramento robótico e treinamento de elite. Solicite proposta personalizada."
          path="/planos"
        />
        <Planos />
      </div>
    </PageMain>
  );
}
