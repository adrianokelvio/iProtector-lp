import { SEO } from '../components/seo/SEO';
import { Hero } from '../components/sections/Hero';
import { TrustBand } from '../components/sections/TrustBand';
import { ParaQuem } from '../components/sections/ParaQuem';
import { ComoFunciona } from '../components/sections/ComoFunciona';
import { Servicos } from '../components/sections/Servicos';
import { Agentes } from '../components/sections/Agentes';
import { Tecnologia } from '../components/sections/Tecnologia';
import { Planos } from '../components/sections/Planos';
import { Parceiros } from '../components/sections/Parceiros';
import { Diferenciais } from '../components/sections/Diferenciais';
import { Segmentos } from '../components/sections/Segmentos';
import { Faq } from '../components/sections/Faq';
import { FinalCta } from '../components/sections/FinalCta';

export function Home() {
  return (
    <main>
      <SEO
        title="iProtector — Proteção pessoal sob demanda, monitorada 24h"
        description="Personal Protection as a Service. Contrate seguranças certificados em poucos cliques, com central 24h, monitoramento em tempo real, drones, rastreamento e tecnologia em campo."
        path="/"
      />
      <Hero />
      <TrustBand />
      <ParaQuem />
      <ComoFunciona />
      <Servicos />
      <Agentes />
      <Tecnologia />
      <Planos />
      <Parceiros />
      <Diferenciais />
      <Segmentos />
      <Faq />
      <FinalCta />
    </main>
  );
}
