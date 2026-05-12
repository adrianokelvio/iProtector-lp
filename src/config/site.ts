// Número internacional do WhatsApp (só dígitos) — central iProtector.
export const WHATSAPP_NUMBER = '5511997194408';

export const COMPANY = {
  cnpj: '17.738.538/0001-09',
  address: {
    street: 'Av. Dr. Chucri Zaidan, 1649',
    neighborhood: 'Vila São Francisco',
    region: 'Zona Sul',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '04711-130',
    country: 'BR',
    full: 'Av. Dr. Chucri Zaidan, 1649 — Vila São Francisco, São Paulo / SP · 04711-130',
  },
  phoneDisplay: '+55 (11) 99719-4408',
  foro: 'São Paulo / SP',
} as const;

export const SITE = {
  name: 'iProtector',
  tagline: 'Proteção pessoal sob demanda, monitorada 24h',
  description:
    'Contrate seguranças qualificados em poucos cliques. Personal Protection as a Service com agentes certificados, monitoramento 24h e tecnologia em campo.',
  email: {
    comercial: 'comercial@iprotector.com.br',
    parcerias: 'parcerias@iprotector.com.br',
    suporte: 'suporte@iprotector.com.br',
    imprensa: 'imprensa@iprotector.com.br',
    dpo: 'dpo@iprotector.com.br',
    legal: 'legal@iprotector.com.br',
    geral: 'contato@iprotector.com.br',
  },
  nav: [
    { href: '/#como-funciona', label: 'Como funciona' },
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#parceiros', label: 'Para empresas parceiras' },
    { href: '/#planos', label: 'Planos' },
    { href: '/contato', label: 'Contato' },
  ],
} as const;

export function getWhatsAppUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
