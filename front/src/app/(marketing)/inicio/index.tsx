import HeroSection from 'src/components/HeroSection';
import Filter from './Filter';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import PageContainer from 'src/components/PageContainer';

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({ searchParams }: PropertiesPageProps) {
  await searchParams;

  return (
    <>
      <HeroSection
        backgroundImage="herosection-home-bg.avif"
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
