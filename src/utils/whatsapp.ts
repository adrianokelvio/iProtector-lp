import { getWhatsAppUrl } from '../config/site';
import type { ClientFormData, PartnerFormData, ContactFormData } from '../types/forms';

export function buildClientMessage(data: ClientFormData): string {
  return [
    '[iProtector — Solicitação Cliente]',
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.telefone}`,
    `Cidade/UF: ${data.cidade}`,
    `Tipo de proteção: ${data.tipo}`,
    `Prazo: ${data.prazo}`,
    data.mensagem ? `Mensagem: ${data.mensagem}` : null,
    data.marketing ? 'Aceita comunicações comerciais: Sim' : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildPartnerMessage(data: PartnerFormData): string {
  return [
    '[iProtector — Cadastro de Empresa Parceira]',
    `Razão social: ${data.razao}`,
    `Nome fantasia: ${data.fantasia}`,
    `CNPJ: ${data.cnpj}`,
    `Responsável: ${data.responsavel} (${data.cargo})`,
    `E-mail corporativo: ${data.email}`,
    `Telefone: ${data.telefone}`,
    `Regiões de atuação: ${data.regioes}`,
    `Tempo de operação: ${data.tempo}`,
    `Agentes ativos: ${data.agentes}`,
    `Alvará PF: ${data.alvara}`,
    data.mensagem ? `Observações: ${data.mensagem}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildContactMessage(data: ContactFormData): string {
  return [
    '[iProtector — Contato Geral]',
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    data.telefone ? `Telefone: ${data.telefone}` : null,
    `Assunto: ${data.assunto}`,
    `Mensagem: ${data.mensagem}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
