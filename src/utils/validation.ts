export const validateEmail = (v: string): boolean => /^.+@.+\..+$/.test(v);

export const validatePhoneBR = (v: string): boolean => {
  const digits = v.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
};

export const validateCnpj = (v: string): boolean => {
  const digits = v.replace(/\D/g, '');
  return digits.length === 14;
};

export const isNonEmpty = (v: string): boolean => v.trim().length > 0;
