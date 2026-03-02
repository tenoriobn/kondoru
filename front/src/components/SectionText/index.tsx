import type { SectionTextProps } from './sectionText.type';

export function SectionText({ children, className }: SectionTextProps) {
  return (
    <p
      className={`text-base md:text-xl font-medium text-center text-dark-slate-84 ${className ?? ''}`}
    >
      {children}
    </p>
  );
}
