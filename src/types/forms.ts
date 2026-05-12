export type ClientFormData = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  tipo: string;
  prazo: string;
  mensagem: string;
  privacidade: boolean;
  marketing: boolean;
};

export type PartnerFormData = {
  razao: string;
  fantasia: string;
  cnpj: string;
  responsavel: string;
  cargo: string;
  email: string;
  telefone: string;
  regioes: string;
  tempo: string;
  agentes: string;
  alvara: string;
  mensagem: string;
  privacidade: boolean;
};

export type ContactFormData = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  privacidade: boolean;
};

export type FieldErrors<T> = Partial<Record<keyof T, string>>;
