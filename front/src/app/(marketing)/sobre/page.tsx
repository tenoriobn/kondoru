'use client';
import HeroSection from 'src/components/HeroSection';
import AboutInfo from './AboutInfo';
import AboutSection from './AboutSection';
import OurPhilosophySection from './OurPhilosophySection';
import FAQ from './FAQ';
import PageContainer from 'src/components/PageContainer';

export default function About() {
  return (
    <>
      <HeroSection
        backgroundImage="herosection-about-bg.avif"
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

      <PageContainer>
        <AboutSection />
        <OurPhilosophySection />
        <FAQ />
      </PageContainer>
    </>
  );
}
