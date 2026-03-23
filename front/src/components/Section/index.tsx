import type { SectionProps } from './section.type';

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={`w-full max-w-6xl ${className}`} {...props}>
      {children}
    </section>
  );
}
