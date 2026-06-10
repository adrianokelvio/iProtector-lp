import { SEO } from '../components/seo/SEO';
import { Hero } from '../components/sections/Hero';
import { ParaQuem } from '../components/sections/ParaQuem';
import { Diferenciais } from '../components/sections/Diferenciais';
import { Segmentos } from '../components/sections/Segmentos';
import { Faq } from '../components/sections/Faq';
import { FinalCta } from '../components/sections/FinalCta';

export function Home() {
  return (
    <main>
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
    </main>
  );
}
