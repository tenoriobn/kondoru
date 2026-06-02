'use client';
import Section from 'src/components/Section';
import PropertiesFilters from './PropertiesFilters';
import PropertiesList from './PropertiesList';
import { usePropertiesSearch } from '../usePropertiesSearch';
import PageContainer from 'src/components/PageContainer';

export default function PropertiesContent() {
  const search = usePropertiesSearch();

  return (
    <PageContainer className="pt-29 md:pt-41">
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
  );
}
