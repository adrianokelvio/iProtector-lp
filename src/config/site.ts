// Número internacional do WhatsApp (só dígitos), central iProtector.
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
    full: 'Av. Dr. Chucri Zaidan, 1649 · São Paulo / SP · CEP 04711-130',
  },
  phoneDisplay: '+55 (11) 99719-4408',
  foro: 'São Paulo / SP',
} as const;

export const SITE = {
  name: 'iProtector',
  tagline:
    'Plataforma de tecnologia para agenciamento de proteção pessoal, patrimonial e monitoramento robótico',
  description:
    'Marketplace nacional de segurança. Conectamos clientes, empresas de segurança, agentes protetores e fornecedores de tecnologias avançadas de gerenciamento de riscos, com treinamentos de elite e Security as a Service.',
  email: {
    contato: 'contato@iprotector.com.br',
  },
  nav: [
    { href: '/#como-funciona', label: 'Como funciona' },
    { href: '/#servicos', label: 'Soluções' },
    { href: '/#tecnologia', label: 'Monitoramento' },
    { href: '/#planos', label: 'Planos' },
    { href: '/#parceiros', label: 'Parceiros' },
    { href: '/contato', label: 'Contato' },
  ],
} as const;

export function getWhatsAppUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
