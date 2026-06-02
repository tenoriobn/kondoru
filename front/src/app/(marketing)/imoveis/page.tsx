import HeroSection from 'src/components/HeroSection';
import Filter from 'src/components/Filter';
import PropertiesContent from './PropertiesContent';

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  await searchParams;

  return (
    <>
      <HeroSection
        backgroundImage="herosection-properties-bg.avif"
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

      <PropertiesContent />
    </>
  );
}
