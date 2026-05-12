import { Routes, Route } from 'react-router-dom';
import { useDisclosure } from './hooks/useDisclosure';
import { Header } from './components/layout/Header';
import { Drawer } from './components/layout/Drawer';
import { Footer } from './components/layout/Footer';
import { WhatsAppFab } from './components/layout/WhatsAppFab';
import { CookiesBanner } from './components/layout/CookiesBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ClientModal } from './components/modals/ClientModal';
import { PartnerModal } from './components/modals/PartnerModal';
import { ModalsProvider } from './components/modals/ModalsContext';
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';
import { Privacidade } from './pages/Privacidade';
import { Termos } from './pages/Termos';
import { useCookieConsent } from './hooks/useCookieConsent';

export default function App() {
  const client = useDisclosure();
  const partner = useDisclosure();
  const drawer = useDisclosure();
  const cookies = useCookieConsent();

  return (
    <ModalsProvider value={{ openClient: client.open, openPartner: partner.open }}>
      <ScrollToTop />
      <Header
        onOpenClient={client.open}
        onOpenPartner={partner.open}
        onOpenDrawer={drawer.open}
      />
      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpenClient={client.open}
        onOpenPartner={partner.open}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>

      <Footer onOpenPartner={partner.open} onOpenCookies={cookies.reopen} />
      <WhatsAppFab />
      <CookiesBanner />

      <ClientModal isOpen={client.isOpen} onClose={client.close} />
      <PartnerModal isOpen={partner.isOpen} onClose={partner.close} />
    </ModalsProvider>
  );
}
