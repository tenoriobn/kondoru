import { SectionTitle } from 'src/components/SectionTitle';
import FaqAccordion from './FaqAccordion';
import { SectionText } from 'src/components/SectionText';
import Section from 'src/components/Section';

export default function FAQ() {
  return (
    <Section
      aria-labelledby="faq-section-title"
      className="grid items-center justify-items-center gap-8 h-full min-h-124 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl"
    >
      <div className="max-w-145">
        <SectionTitle id="faq-section-title" className="justify-self-center max-[521px]:max-w-82">
          Dúvidas frequentes
        </SectionTitle>

        <SectionText className="my-4">
          Reunimos as principais questões sobre nossa atuação, critérios de curadoria e modelo de
          atendimento. Prezamos pela clareza em cada etapa, para que você compreenda como conduzimos
          nossos processos e o que esperar da experiência com a KondoRu.
        </SectionText>

        <button
          type="button"
          className="cursor-pointer w-full max-w-full grid place-items-center gap-2 px-8 py-4 bg-dark-slate-800 text-white rounded-full font-semibold text-base md:text-xl transition duration-300 ease-in-out hover:bg-gray-500 hover: active:bg-gray-400 active:scale-90"
        >
          Precisa de mais informações?
        </button>
      </div>

      <FaqAccordion />
    </Section>
  );
}
