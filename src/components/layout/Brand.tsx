import { Link } from 'react-router-dom';

type Props = {
  variant?: 'header' | 'footer';
  ariaLabel?: string;
};

export function Brand({ variant = 'header', ariaLabel = 'iProtector' }: Props) {
  return (
    <Link
      to="/"
      className={`brand brand-svg brand-svg--${variant}`}
      aria-label={ariaLabel}
    >
      <img
        src="/assets/iprotector-logo.svg"
        alt="iProtector"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
