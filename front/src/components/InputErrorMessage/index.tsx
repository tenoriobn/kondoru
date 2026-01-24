import type { ReactNode } from 'react';

export default function InputErrorMessage({ children }: { children: ReactNode }) {
  return <span className="text-red text-base font-light pl-6.5 self-start">{children}</span>;
}
