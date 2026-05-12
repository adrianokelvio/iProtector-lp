// TODO: Substituir pelo número real antes do deploy (formato 5511999999999)
export const WHATSAPP_NUMBER = '';

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
