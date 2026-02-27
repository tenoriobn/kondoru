import FaqAccordion from './FaqAccordion';

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-section-title"
      className="grid items-center justify-items-center gap-8 h-full min-h-124 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl"
    >
      <div className="grid gap-4 max-w-145">
        <h2
          id="faq-section-title"
          className="justify-self-center w-full text-center text-[1.5rem] font-black text-dark-slate-900 uppercase max-[521px]:max-w-82"
        >
          Dúvidas frequentes
        </h2>

        <p className="text-xl font-medium text-center text-dark-slate-84">
          Reunimos as principais questões sobre nossa atuação, critérios de curadoria e modelo de
          atendimento. Prezamos pela clareza em cada etapa, para que você compreenda como conduzimos
          nossos processos e o que esperar da experiência com a KondoRu.
        </p>

        <button
          type="button"
          className="cursor-pointer w-full max-w-full grid place-items-center gap-2 px-8 py-4 bg-dark-slate-800 text-white rounded-full font-semibold text-base md:text-xl transition duration-300 ease-in-out hover:bg-gray-500 active:bg-gray-400 active:scale-90"
        >
          Precisa de mais informações?
        </button>
      </div>

      <FaqAccordion />
    </section>
  );
}
