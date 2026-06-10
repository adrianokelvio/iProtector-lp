import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function PageMain({ children, className }: Props) {
  const classes = className ? `page-main ${className}` : 'page-main';
  return <main className={classes}>{children}</main>;
}
