import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalShell } from '../ui/ModalShell';
import { SuccessPanel } from '../ui/SuccessPanel';
import { Arrow } from '../ui/Arrow';
import { maskPhoneBR } from '../../hooks/useMasks';
import { validateEmail, isNonEmpty } from '../../utils/validation';
import { buildClientMessage, openWhatsApp } from '../../utils/whatsapp';
import { getWhatsAppUrl } from '../../config/site';
import type { ClientFormData, FieldErrors } from '../../types/forms';

const TIPOS = [
  'Proteção pessoal (bodyguard)',
  'Proteção residencial / patrimonial',
  'Proteção executiva / VIP',
  'Evento privado ou corporativo',
  'Propriedade rural / fazenda',
  'Transporte de valores',
  'Outro',
];

const PRAZOS = [
  'Imediatamente (hoje)',
  'Nos próximos 7 dias',
  'Nos próximos 30 dias',
  'Planejamento de longo prazo',
];

const initial: ClientFormData = {
  nome: '',
  email: '',
  telefone: '',
  cidade: '',
  tipo: '',
  prazo: '',
  mensagem: '',
  privacidade: false,
  marketing: false,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ClientModal({ isOpen, onClose }: Props) {
  const [data, setData] = useState<ClientFormData>(initial);
  const [errors, setErrors] = useState<FieldErrors<ClientFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof ClientFormData>(
    key: K,
    value: ClientFormData[K],
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors<ClientFormData> = {};
    if (!isNonEmpty(data.nome)) next.nome = 'Informe seu nome completo.';
    if (!validateEmail(data.email)) next.email = 'E-mail inválido.';
    if (data.telefone.replace(/\D/g, '').length < 10)
      next.telefone = 'Telefone inválido.';
    if (!isNonEmpty(data.cidade)) next.cidade = 'Informe sua cidade e estado.';
    if (!data.tipo) next.tipo = 'Selecione o tipo de proteção.';
    if (!data.prazo) next.prazo = 'Selecione o prazo.';
    if (!data.privacidade) next.privacidade = 'Aceite a política para continuar.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    openWhatsApp(buildClientMessage(data));
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setData(initial);
      setErrors({});
    }, 200);
  };

  return (
    <ModalShell id="modal-client" isOpen={isOpen} onClose={handleClose}>
      {!submitted ? (
        <div className="form-body">
          <h3>Fale com um especialista iProtector.</h3>
          <p className="sub">
            Preencha os campos abaixo e nossa equipe entra em contato em até 30
            minutos (em horário comercial) ou na sequência se você estiver fora do
            horário.
          </p>
          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <label className="full">
              Nome completo *
              <input
                type="text"
                value={data.nome}
                onChange={(e) => update('nome', e.target.value)}
                style={errors.nome ? { borderColor: '#E5484D' } : undefined}
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
                style={errors.email ? { borderColor: '#E5484D' } : undefined}
                required
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </label>
            <label>
              Telefone / WhatsApp *
              <input
                type="tel"
                value={data.telefone}
                placeholder="(11) 99999-9999"
                onChange={(e) => update('telefone', maskPhoneBR(e.target.value))}
                style={errors.telefone ? { borderColor: '#E5484D' } : undefined}
                required
              />
              {errors.telefone && (
                <p className="field-error">{errors.telefone}</p>
              )}
            </label>
            <label>
              Cidade / Estado *
              <input
                type="text"
                value={data.cidade}
                onChange={(e) => update('cidade', e.target.value)}
                style={errors.cidade ? { borderColor: '#E5484D' } : undefined}
                required
              />
              {errors.cidade && <p className="field-error">{errors.cidade}</p>}
            </label>
            <label>
              Tipo de proteção *
              <select
                value={data.tipo}
                onChange={(e) => update('tipo', e.target.value)}
                style={errors.tipo ? { borderColor: '#E5484D' } : undefined}
                required
              >
                <option value="">Selecione…</option>
                {TIPOS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.tipo && <p className="field-error">{errors.tipo}</p>}
            </label>
            <label className="full">
              Quando você precisa? *
              <select
                value={data.prazo}
                onChange={(e) => update('prazo', e.target.value)}
                style={errors.prazo ? { borderColor: '#E5484D' } : undefined}
                required
              >
                <option value="">Selecione…</option>
                {PRAZOS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              {errors.prazo && <p className="field-error">{errors.prazo}</p>}
            </label>
            <label className="full">
              Mensagem (opcional)
              <textarea
                value={data.mensagem}
                onChange={(e) => update('mensagem', e.target.value)}
              />
            </label>
            <label className="check full">
              <input
                type="checkbox"
                checked={data.privacidade}
                onChange={(e) => update('privacidade', e.target.checked)}
                required
              />
              Li e concordo com a <Link to="/privacidade">Política de Privacidade</Link>{' '}
              e os <Link to="/termos">Termos de Uso</Link> do iProtector.
            </label>
            {errors.privacidade && (
              <p className="field-error full">{errors.privacidade}</p>
            )}
            <label className="check full">
              <input
                type="checkbox"
                checked={data.marketing}
                onChange={(e) => update('marketing', e.target.checked)}
              />
              Aceito receber comunicações comerciais por e-mail e WhatsApp.
            </label>
            <button className="btn btn-primary submit full" type="submit">
              Enviar pelo WhatsApp <Arrow />
            </button>
          </form>
        </div>
      ) : (
        <SuccessPanel
          title="Solicitação enviada."
          subtitle="Um especialista iProtector entrará em contato em breve. Em casos de urgência, fale agora mesmo pelo WhatsApp."
        >
          <a
            className="btn btn-primary"
            style={{ marginTop: 20 }}
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar pelo WhatsApp <Arrow />
          </a>
        </SuccessPanel>
      )}
    </ModalShell>
  );
}
