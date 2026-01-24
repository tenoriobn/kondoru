import ElegantShowcasePlayer from './ElegantShowcasePlayer';

export default function ElegantShowcase() {
  return (
    <section className="grid items-center justify-items-center gap-8 h-full min-h-124 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl">
      <ElegantShowcasePlayer />

      <div className="grid gap-4">
        <h2 className="justify-self-center w-full text-center text-[1.5rem] font-[950] text-dark-slate-900 uppercase max-[521px]:max-w-82">
          Viva a Elegância em <span className="whitespace-nowrap">Cada Detalhe</span>
        </h2>

        <p className="text-xl font-medium text-center text-dark-slate-84">
          Apresentamos uma coleção única de imóveis com design inteligente, acabamentos de alta
          qualidade e situados nas melhores áreas. Eleve seu estilo de vida com o que há de mais
          sofisticado no mercado imobiliário.
        </p>
      </div>
    </section>
  );
}
