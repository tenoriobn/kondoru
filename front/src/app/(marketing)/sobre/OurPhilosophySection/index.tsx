import { SectionTitle } from 'src/components/SectionTitle';
import PhilosophyCards from './PhilosophyCards';
import { SectionText } from 'src/components/SectionText';
import Section from 'src/components/Section';

export default function OurPhilosophySection() {
  return (
    <Section aria-labelledby="our-philosophy-section-title">
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
    </Section>
  );
}
