import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../ui/Arrow';
import { SuccessPanel } from '../ui/SuccessPanel';
import { maskPhoneBR } from '../../hooks/useMasks';
import { validateEmail, isNonEmpty } from '../../utils/validation';
import { buildContactMessage, openWhatsApp } from '../../utils/whatsapp';
import type { ContactFormData, FieldErrors } from '../../types/forms';

const ASSUNTOS = [
  'Imprensa',
  'Parcerias institucionais',
  'Investidores',
  'Dúvida geral',
  'Reclamação',
  'Outro',
];

const initial: ContactFormData = {
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
  privacidade: false,
};

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initial);
  const [errors, setErrors] = useState<FieldErrors<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors<ContactFormData> = {};
    if (!isNonEmpty(data.nome)) next.nome = 'Informe seu nome.';
    if (!validateEmail(data.email)) next.email = 'E-mail inválido.';
    if (!data.assunto) next.assunto = 'Selecione o assunto.';
    if (!isNonEmpty(data.mensagem)) next.mensagem = 'Escreva sua mensagem.';
    if (!data.privacidade)
      next.privacidade = 'Aceite a política para continuar.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    openWhatsApp(buildContactMessage(data));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessPanel
        title="Mensagem enviada com sucesso."
        subtitle="Em breve nossa equipe entrará em contato."
      />
    );
  }

  const errStyle = (k: keyof ContactFormData) =>
    errors[k] ? { borderColor: '#E5484D' } : undefined;

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      <label className="full">
        Nome *
        <input
          type="text"
          value={data.nome}
          onChange={(e) => update('nome', e.target.value)}
          style={errStyle('nome')}
          required
        />
        {errors.nome && <p className="field-error">{errors.nome}</p>}
      </label>
      <label>
        E-mail *
        <input
          type="email"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
          style={errStyle('email')}
          required
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </label>
      <label>
        Telefone
        <input
          type="tel"
          value={data.telefone}
          onChange={(e) => update('telefone', maskPhoneBR(e.target.value))}
        />
      </label>
      <label className="full">
        Assunto *
        <select
          value={data.assunto}
          onChange={(e) => update('assunto', e.target.value)}
          style={errStyle('assunto')}
          required
        >
          <option value="">Selecione…</option>
          {ASSUNTOS.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
        {errors.assunto && <p className="field-error">{errors.assunto}</p>}
      </label>
      <label className="full">
        Mensagem *
        <textarea
          value={data.mensagem}
          onChange={(e) => update('mensagem', e.target.value)}
          style={errStyle('mensagem')}
          required
        />
        {errors.mensagem && <p className="field-error">{errors.mensagem}</p>}
      </label>
      <label className="check full">
        <input
          type="checkbox"
          checked={data.privacidade}
          onChange={(e) => update('privacidade', e.target.checked)}
          required
        />
        Li e concordo com a <Link to="/privacidade">Política de Privacidade</Link>.
      </label>
      {errors.privacidade && (
        <p className="field-error full">{errors.privacidade}</p>
      )}
      <button className="btn btn-primary submit full" type="submit">
        Enviar pelo WhatsApp <Arrow />
      </button>
    </form>
  );
}
