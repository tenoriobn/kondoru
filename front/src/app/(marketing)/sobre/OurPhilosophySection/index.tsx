import { SectionTitle } from 'src/components/SectionTitle';
import PhilosophyCards from './PhilosophyCards';
import { SectionText } from 'src/components/SectionText';

export default function OurPhilosophySection() {
  return (
    <section aria-labelledby="our-philosophy-section-title" className="w-full max-w-6xl">
      <div className="mb-8">
        <SectionTitle
          id="our-philosophy-section-title"
          className="justify-self-center max-[521px]:max-w-82"
        >
          Como pensamos e atuamos
        </SectionTitle>

        <SectionText className="mt-4">
          A KondoRu atua com método, critério e visão de longo prazo. <br />
          Cada decisão é orientada por análise, contexto e responsabilidade.
        </SectionText>
      </div>

      <PhilosophyCards />
    </section>
  );
}
