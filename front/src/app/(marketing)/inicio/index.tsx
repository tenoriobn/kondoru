'use client';
import HeroSection from 'src/components/HeroSection';
import Filter from 'src/components/Filter';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import PageContainer from 'src/components/PageContainer';

export default function HomePage() {
  return (
    <>
      <HeroSection
        backgroundImage="herosection-home-bg.webp"
        title="KondoRu"
        subtitle={
          <>
            Viva o melhor da vida <br /> no lugar certo
          </>
        }
      >
        <Filter />
      </HeroSection>

      <PageContainer>
        <PropertyCarousel />
        <ElegantShowcase />
        <TestimonialCarousel />
      </PageContainer>
    </>
  );
}
