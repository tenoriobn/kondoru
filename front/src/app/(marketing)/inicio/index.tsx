'use client';
import HeroSection from 'src/components/HeroSection';
import Filter from './Filter';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundImage="background-header.webp"
        title="KondoRu"
        subtitle={
          <>
            Viva o melhor da vida <br /> no lugar certo
          </>
        }
      >
        <Filter />
      </HeroSection>

      <div className="bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 mb-25 gap-25 md:mx-16 md:mb-32 md:gap-32">
        <PropertyCarousel />
        <ElegantShowcase />
        <TestimonialCarousel />
      </div>
    </>
  );
}
