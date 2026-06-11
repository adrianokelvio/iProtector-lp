import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Parceiros } from '../components/sections/Parceiros';

const PARCEIROS_BG_VIDEO = '/assets/videos/parceiros-bg.mp4';

export function ParceirosPage() {
  return (
    <PageMain className="page-main--video-bg page-main--parceiros">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo src={PARCEIROS_BG_VIDEO} title="Parceiros iProtector" />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="Parceiros, iProtector | Rede de empresas de segurança"
          description="Cadastre sua empresa de segurança na rede iProtector. Marketplace nacional, demanda qualificada e operação integrada."
          path="/parceiros"
        />
        <Parceiros />
      </div>
    </PageMain>
  );
}
