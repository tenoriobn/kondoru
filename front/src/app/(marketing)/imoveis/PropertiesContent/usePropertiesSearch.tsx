import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { httpGet } from 'src/services';

import type { PropertiesResponse, Property } from './PropertiesList/propertiesList.type';

import type { AdvancedFiltersPanelSchemaData } from './PropertiesFilters/AdvancedFiltersPanel/advancedFiltersPanelSchema';

import type { PropertySortType } from './PropertiesFilters/PropertySort/propertySort.type';

export function usePropertiesSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState<Property[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const page = Number(searchParams.get('page') ?? '1');

  useEffect(() => {
    async function fetchProperties() {
      try {
        setIsLoading(true);

        const response = await httpGet<PropertiesResponse>(
          `/properties?${searchParams.toString()}`
        );

        setProperties(response.data);
        setTotalPages(response.meta.totalPages);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, [searchParams]);

  function applyFilters(data: AdvancedFiltersPanelSchemaData) {
    const params = new URLSearchParams(searchParams);

    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') {
        params.delete(key);
        return;
      }

      params.set(key, String(value));
    });

    params.set('page', '1');

    router.replace(`/imoveis?${params.toString()}`);
  }

  function changeSort(value: PropertySortType) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }

    params.set('page', '1');

    router.replace(`/imoveis?${params.toString()}`);
  }

  function setPage(pages: number) {
    const params = new URLSearchParams(searchParams);

    params.set('page', String(pages));

    router.replace(`/imoveis?${params.toString()}`);
  }

  return {
    properties,
    page,
    totalPages,
    isLoading,

    applyFilters,
    changeSort,
    setPage,
  };
}
