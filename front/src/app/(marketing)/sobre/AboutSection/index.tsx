import usePlayerScript from 'src/hooks/usePlayerScript';
import 'src/styles/elegantShowcasePlayer.css';

export default function AboutSection() {
  usePlayerScript('./video/about.mp4');

  return (
    <section
      aria-labelledby="about-section-title"
      className="grid items-center justify-items-center gap-8 h-full min-h-124 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl"
    >
      <div className="grid gap-4 max-w-145">
        <h2
          id="about-section-title"
          className="justify-self-center w-full text-center text-[1.5rem] font-black text-dark-slate-900 uppercase max-[521px]:max-w-82"
        >
          Quem somos
        </h2>

        <p className="text-xl font-medium text-center text-dark-slate-84">
          A KondoRu nasceu com o propósito de simplificar e elevar a forma como as pessoas encontram
          e se conectam a imóveis residenciais e comerciais. Acreditamos que escolher um lugar para
          viver ou investir vai muito além de metragem ou localização. <br />
          Nosso foco está em oferecer uma experiência clara, moderna e humana, unindo tecnologia,
          design e curadoria para apresentar imóveis que realmente fazem sentido para cada perfil.
        </p>
      </div>

      <figure className="w-full h-full flex items-center justify-center">
        <div
          id="player"
          role="img"
          aria-label="Vídeo demonstrativo de uma residência de luxo, exibindo arquitetura e acabamentos sofisticados"
        />
      </figure>
    </section>
  );
}
