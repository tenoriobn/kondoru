import HeroSection from 'src/components/HeroSection';
import AboutInfo from './AboutInfo';

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage="herosection-about-bg.webp"
        title="Sobre"
        subtitle={
          <span className="block max-md:max-w-114.25">
            Conectamos pessoas a {''}
            <br className="block md:hidden" />
            espaços <br className="hidden md:block" /> que fazem sentido {''}
            <span className="whitespace-nowrap">para suas vidas</span>
          </span>
        }
      >
        <AboutInfo />
      </HeroSection>
    </>
  );
}
