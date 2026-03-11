type Props = {
  title: string;
  children: React.ReactNode;
};

export default function FilterSection({ title, children }: Props) {
  return (
    <section>
      <h4 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h4>

      {children}
    </section>
  );
}
