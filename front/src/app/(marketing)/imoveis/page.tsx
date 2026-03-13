'use client';
import HeroSection from 'src/components/HeroSection';
import Filter from 'src/components/Filter';
import PropertiesFilters from './PropertiesFilters';
import PropertiesGrid from './PropertiesGrid';

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

      <section
        aria-labelledby="properties-results"
        className="bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 mb-25 gap-25 md:mx-16 md:mb-32 md:gap-32"
      >
        <div className="w-full max-w-6xl">
          <h2 id="properties-results" className="sr-only">
            Lista de imóveis
          </h2>

          <PropertiesFilters />
          <PropertiesGrid />
        </div>
      </section>
    </>
  );
}
