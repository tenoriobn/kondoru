'use client';
import HeroSection from 'src/components/HeroSection';
import Filter from 'src/components/Filter';
import PropertiesFilters from './PropertiesFilters';
import PropertiesList from './PropertiesList';
import { usePropertiesSearch } from './usePropertiesSearch';
import PageContainer from 'src/components/PageContainer';
import Section from 'src/components/Section';

export default function Properties() {
  const search = usePropertiesSearch();

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

      <PageContainer>
        <Section aria-labelledby="properties-results">
          <h2 id="properties-results" className="sr-only">
            Lista de imóveis
          </h2>

          <PropertiesFilters
            onApplyFilters={search.applyFilters}
            onSortChange={search.changeSort}
            isLoading={search.isLoading}
          />

          <PropertiesList
            properties={search.properties}
            page={search.page}
            setPage={search.setPage}
            totalPages={search.totalPages}
            isLoading={search.isLoading}
          />
        </Section>
      </PageContainer>
    </>
  );
}
