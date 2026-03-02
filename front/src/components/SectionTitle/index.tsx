import type { SectionTitleProps } from './sectionTitle.type';

export function SectionTitle({ children, id, className }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`w-full text-center text-2xl font-black text-dark-slate-900 uppercase ${className || ''}`}
    >
      {children}
    </h2>
  );
}
