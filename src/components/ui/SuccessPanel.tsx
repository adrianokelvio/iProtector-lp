import type { ReactNode } from 'react';

type Props = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function SuccessPanel({ title, subtitle, children }: Props) {
  return (
    <div className="success show">
      <div className="check-anim">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3>{title}</h3>
      <p className="sub">{subtitle}</p>
      {children}
    </div>
  );
}
