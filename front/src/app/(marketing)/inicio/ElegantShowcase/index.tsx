import Section from 'src/components/Section';
import { SectionText } from 'src/components/SectionText';
import { SectionTitle } from 'src/components/SectionTitle';
import usePlayerScript from 'src/hooks/usePlayerScript';
import 'src/styles/elegantShowcasePlayer.css';

export default function ElegantShowcase() {
  usePlayerScript('./video/rio-perdido.mp4');

  return (
    <Section
      aria-labelledby="elegant-showcase-title"
      className="grid items-center justify-items-center gap-8 h-full min-h-124 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))]"
    >
      <div className="max-w-145">
        <SectionTitle
          id="elegant-showcase-title"
          className="justify-self-center max-[521px]:max-w-82"
        >
          Viva a Elegância em <span className="whitespace-nowrap">Cada Detalhe</span>
        </SectionTitle>

        <SectionText className="mt-4">
          Apresentamos uma coleção única de imóveis com design inteligente, acabamentos de alta
          qualidade e situados nas melhores áreas. Eleve seu estilo de vida com o que há de mais
          sofisticado no mercado imobiliário.
        </SectionText>
      </div>

      <figure className="w-full h-full flex items-center justify-center">
        <div
          id="player"
          role="img"
          aria-label="Vídeo demonstrativo de uma residência de luxo, exibindo arquitetura e acabamentos sofisticados"
        />
      </figure>
    </Section>
  );
}
