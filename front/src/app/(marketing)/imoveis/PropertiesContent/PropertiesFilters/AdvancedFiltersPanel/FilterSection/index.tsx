import type { FilterSectionProps } from './filterSection.type';

export default function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <section>
      <h4 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h4>

      {children}
    </section>
  );
}
