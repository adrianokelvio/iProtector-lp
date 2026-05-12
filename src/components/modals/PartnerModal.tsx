import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalShell } from '../ui/ModalShell';
import { SuccessPanel } from '../ui/SuccessPanel';
import { Arrow } from '../ui/Arrow';
import { maskPhoneBR, maskCnpj } from '../../hooks/useMasks';
import { validateEmail, validateCnpj, isNonEmpty } from '../../utils/validation';
import { buildPartnerMessage, openWhatsApp } from '../../utils/whatsapp';
import type { PartnerFormData, FieldErrors } from '../../types/forms';

const TEMPOS = [
  'Menos de 1 ano',
  '1 a 3 anos',
  '3 a 5 anos',
  '5 a 10 anos',
  'Mais de 10 anos',
];
const AGENTES = ['Até 10', '11 a 50', '51 a 200', '201 a 500', 'Mais de 500'];
const ALVARAS = ['Sim', 'Não', 'Em processo'];

const initial: PartnerFormData = {
  razao: '',
  fantasia: '',
  cnpj: '',
  responsavel: '',
  cargo: '',
  email: '',
  telefone: '',
  regioes: '',
  tempo: '',
  agentes: '',
  alvara: '',
  mensagem: '',
  privacidade: false,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function PartnerModal({ isOpen, onClose }: Props) {
  const [data, setData] = useState<PartnerFormData>(initial);
  const [errors, setErrors] = useState<FieldErrors<PartnerFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof PartnerFormData>(
    key: K,
    value: PartnerFormData[K],
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors<PartnerFormData> = {};
    if (!isNonEmpty(data.razao)) next.razao = 'Informe a razão social.';
    if (!isNonEmpty(data.fantasia)) next.fantasia = 'Informe o nome fantasia.';
    if (!validateCnpj(data.cnpj)) next.cnpj = 'CNPJ inválido.';
    if (!isNonEmpty(data.responsavel))
      next.responsavel = 'Informe o responsável.';
    if (!isNonEmpty(data.cargo)) next.cargo = 'Informe o cargo.';
    if (!validateEmail(data.email)) next.email = 'E-mail inválido.';
    if (data.telefone.replace(/\D/g, '').length < 10)
      next.telefone = 'Telefone inválido.';
    if (!isNonEmpty(data.regioes)) next.regioes = 'Informe as regiões.';
    if (!data.tempo) next.tempo = 'Selecione o tempo de operação.';
    if (!data.agentes) next.agentes = 'Selecione o número de agentes.';
    if (!data.alvara) next.alvara = 'Selecione a situação do alvará.';
    if (!data.privacidade)
      next.privacidade = 'Aceite a política para continuar.';

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    openWhatsApp(buildPartnerMessage(data));
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

  const errStyle = (k: keyof PartnerFormData) =>
    errors[k] ? { borderColor: '#E5484D' } : undefined;

  return (
    <ModalShell id="modal-partner" isOpen={isOpen} onClose={handleClose}>
      {!submitted ? (
        <div className="form-body">
          <h3>Cadastre sua empresa na rede iProtector.</h3>
          <p className="sub">
            Conte rapidamente sobre a sua operação. Após análise inicial, nossa
            equipe entra em contato para a próxima etapa da homologação.
          </p>
          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <label className="full">
              Razão social *
              <input
                type="text"
                value={data.razao}
                onChange={(e) => update('razao', e.target.value)}
                style={errStyle('razao')}
                required
              />
              {errors.razao && <p className="field-error">{errors.razao}</p>}
            </label>
            <label>
              Nome fantasia *
              <input
                type="text"
                value={data.fantasia}
                onChange={(e) => update('fantasia', e.target.value)}
                style={errStyle('fantasia')}
                required
              />
              {errors.fantasia && (
                <p className="field-error">{errors.fantasia}</p>
              )}
            </label>
            <label>
              CNPJ *
              <input
                type="text"
                value={data.cnpj}
                placeholder="00.000.000/0001-00"
                onChange={(e) => update('cnpj', maskCnpj(e.target.value))}
                style={errStyle('cnpj')}
                required
              />
              {errors.cnpj && <p className="field-error">{errors.cnpj}</p>}
            </label>
            <label>
              Responsável *
              <input
                type="text"
                value={data.responsavel}
                onChange={(e) => update('responsavel', e.target.value)}
                style={errStyle('responsavel')}
                required
              />
              {errors.responsavel && (
                <p className="field-error">{errors.responsavel}</p>
              )}
            </label>
            <label>
              Cargo *
              <input
                type="text"
                value={data.cargo}
                onChange={(e) => update('cargo', e.target.value)}
                style={errStyle('cargo')}
                required
              />
              {errors.cargo && <p className="field-error">{errors.cargo}</p>}
            </label>
            <label>
              E-mail corporativo *
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
              Telefone / WhatsApp *
              <input
                type="tel"
                value={data.telefone}
                onChange={(e) => update('telefone', maskPhoneBR(e.target.value))}
                style={errStyle('telefone')}
                required
              />
              {errors.telefone && (
                <p className="field-error">{errors.telefone}</p>
              )}
            </label>
            <label className="full">
              Cidades / regiões de atuação *
              <input
                type="text"
                value={data.regioes}
                onChange={(e) => update('regioes', e.target.value)}
                style={errStyle('regioes')}
                required
              />
              {errors.regioes && (
                <p className="field-error">{errors.regioes}</p>
              )}
            </label>
            <label>
              Tempo de operação *
              <select
                value={data.tempo}
                onChange={(e) => update('tempo', e.target.value)}
                style={errStyle('tempo')}
                required
              >
                <option value="">Selecione…</option>
                {TEMPOS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.tempo && <p className="field-error">{errors.tempo}</p>}
            </label>
            <label>
              Agentes ativos *
              <select
                value={data.agentes}
                onChange={(e) => update('agentes', e.target.value)}
                style={errStyle('agentes')}
                required
              >
                <option value="">Selecione…</option>
                {AGENTES.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
              {errors.agentes && (
                <p className="field-error">{errors.agentes}</p>
              )}
            </label>
            <label className="full">
              Possui alvará da Polícia Federal? *
              <select
                value={data.alvara}
                onChange={(e) => update('alvara', e.target.value)}
                style={errStyle('alvara')}
                required
              >
                <option value="">Selecione…</option>
                {ALVARAS.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
              {errors.alvara && <p className="field-error">{errors.alvara}</p>}
            </label>
            <label className="full">
              Observações (opcional)
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
              e os <Link to="/termos">Termos de Uso</Link>.
            </label>
            {errors.privacidade && (
              <p className="field-error full">{errors.privacidade}</p>
            )}
            <button className="btn btn-primary submit full" type="submit">
              Enviar cadastro pelo WhatsApp <Arrow />
            </button>
          </form>
        </div>
      ) : (
        <SuccessPanel
          title="Cadastro recebido."
          subtitle="Nossa equipe de homologação analisará a sua empresa e entrará em contato em até 3 dias úteis."
        />
      )}
    </ModalShell>
  );
}
