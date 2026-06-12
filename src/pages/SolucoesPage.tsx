import { SEO } from '../components/seo/SEO';
import { PageMain } from '../components/layout/PageMain';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Servicos } from '../components/sections/Servicos';
import { Agentes } from '../components/sections/Agentes';
import { Treinamento } from '../components/sections/Treinamento';

const SOLUCOES_BG_VIDEO = '/assets/videos/solucoes-bg.mp4';

export function SolucoesPage() {
  return (
    <PageMain className="page-main--video-bg page-main--solucoes">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo src={SOLUCOES_BG_VIDEO} title="Soluções iProtector" />
        <div className="page-bg-video__overlay" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="Soluções, iProtector | Proteção, monitoramento e treinamento"
          description="Proteção executiva, monitoramento robótico, banco de protetores e treinamento de elite. Soluções integradas para clientes corporativos e patrimoniais."
          path="/solucoes"
        />
        <Servicos />
        <Agentes />
        <Treinamento />
      </div>
    </PageMain>
  );
}
