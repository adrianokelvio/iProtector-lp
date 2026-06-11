import { SEO } from '../components/seo/SEO';
import { BackgroundVideo } from '../components/ui/BackgroundVideo';
import { Hero } from '../components/sections/Hero';
import { ParaQuem } from '../components/sections/ParaQuem';
import { Diferenciais } from '../components/sections/Diferenciais';
import { Segmentos } from '../components/sections/Segmentos';
import { Faq } from '../components/sections/Faq';
import { FinalCta } from '../components/sections/FinalCta';

const HOME_BG_VIDEO = '/assets/videos/hero-bg.mp4';

export function Home() {
  return (
    <main className="page-main--video-bg page-main--home">
      <div className="page-bg-video" aria-hidden="true">
        <BackgroundVideo
          src={HOME_BG_VIDEO}
          title="iProtector"
          poster="/assets/hero-bg-source.png"
        />
        <div className="page-bg-video__overlay page-bg-video__overlay--home" />
      </div>
      <div className="page-main__inner">
        <SEO
          title="iProtector, Marketplace de segurança, proteção executiva e monitoramento robótico"
          description="Plataforma de tecnologia para agenciamento de Proteção Pessoal, Patrimonial e Monitoramento Robótico com Treinamentos de Elite. Marketplace nacional de segurança, Security as a Service e banco de protetores sob demanda."
          path="/"
        />
        <Hero />
        <ParaQuem />
        <Diferenciais />
        <Segmentos />
        <Faq />
        <FinalCta />
      </div>
    </main>
  );
}
