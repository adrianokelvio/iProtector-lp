import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function PageMain({ children }: Props) {
  return <main className="page-main">{children}</main>;
}
