'use client';
import HeroSection from 'src/components/HeroSection';
import Filter from 'src/components/Filter';

export default function Properties() {
  return (
    <>
      <HeroSection
        backgroundImage="herosection-properties-bg.webp"
        title="Imóveis"
        subtitle={
          <span className="block max-md:max-w-114.25">
            Seleção estratégica de {''}
            <br className="block md:hidden" />
            espaços <br className="hidden md:block" /> pensados para {''}
            <span className="whitespace-nowrap">o seu momento</span>
          </span>
        }
      >
        <Filter />
      </HeroSection>
    </>
  );
}
