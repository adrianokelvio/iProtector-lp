import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { ComoFunciona } from '../components/sections/ComoFunciona';

const COMO_FUNCIONA_BG_VIDEO = '/assets/videos/como-funciona-bg.mp4';

export function ComoFuncionaPage() {
  return (
    <PageMain className="page-main--video-bg page-main--como-funciona">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo
          src={COMO_FUNCIONA_BG_VIDEO}
          title="Como funciona iProtector"
        />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="Como funciona, iProtector | Marketplace de segurança"
          description="Entenda como o iProtector conecta clientes, empresas de segurança e agentes protetores em uma plataforma nacional de proteção e monitoramento."
          path="/como-funciona"
        />
        <ComoFunciona />
      </div>
    </PageMain>
  );
}
