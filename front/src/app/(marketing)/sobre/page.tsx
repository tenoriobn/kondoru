'use client';
import HeroSection from 'src/components/HeroSection';
import AboutInfo from './AboutInfo';
import AboutSection from './AboutSection';
import OurPhilosophySection from './OurPhilosophySection';

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

      <div className="bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 mb-25 gap-25 md:mx-16 md:mb-32 md:gap-32">
        <AboutSection />
        <OurPhilosophySection />
      </div>
    </>
  );
}
