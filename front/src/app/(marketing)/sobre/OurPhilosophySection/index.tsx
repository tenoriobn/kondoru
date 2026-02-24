import PhilosophyCards from './PhilosophyCards';

export default function OurPhilosophySection() {
  return (
    <section aria-labelledby="our-philosophy-section-title" className="w-full max-w-6xl">
      <div className="grid gap-4 mb-8">
        <h2
          id="our-philosophy-section-title"
          className="justify-self-center w-full text-center text-[1.5rem] font-black text-dark-slate-900 uppercase max-[521px]:max-w-82"
        >
          Como pensamos e atuamos
        </h2>

        <p className="text-xl font-medium text-center text-dark-slate-84">
          A KondoRu atua com método, critério e visão de longo prazo. <br />
          Cada decisão é orientada por análise, contexto e responsabilidade.
        </p>
      </div>

      <PhilosophyCards />
    </section>
  );
}
