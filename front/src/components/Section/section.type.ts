import type { ReactNode } from 'react';

export type SectionProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;
