import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { httpGet } from 'src/services';
import type { PropertiesResponse, PropertyDetails } from './PropertiesList/propertiesList.type';
import type { AdvancedFiltersPanelSchemaData } from './PropertiesFilters/AdvancedFiltersPanel/advancedFiltersPanelSchema';
import type { PropertySortType } from './PropertiesFilters/PropertySort/propertySort.type';

export function usePropertiesSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [response, setResponse] = useState<PropertiesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const page = Number(searchParams.get('page') ?? '1');

  useEffect(() => {
    async function fetchProperties() {
      try {
        setIsLoading(true);

        const result = await httpGet<PropertiesResponse>(`/properties?${searchParams.toString()}`);

        setResponse(result);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, [searchParams]);

  const updateSearchParams = useCallback(
    (updater: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(searchParams);

      updater(params);

      router.replace(`/imoveis?${params.toString()}`);
    },
    [router, searchParams]
  );

  function applyFilters(data: AdvancedFiltersPanelSchemaData) {
    updateSearchParams((params) => {
      Object.entries(data).forEach(([key, value]) => {
        const isEmpty =
          value === undefined ||
          value === null ||
          value === '' ||
          (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          params.delete(key);
          return;
        }

        params.set(key, Array.isArray(value) ? value.join(',') : String(value));
      });

      params.set('page', '1');
    });
  }

  function changeSort(value: PropertySortType) {
    updateSearchParams((params) => {
      if (value) {
        params.set('sort', value);
      } else {
        params.delete('sort');
      }

      params.set('page', '1');
    });
  }

  function setPage(newPage: number) {
    updateSearchParams((params) => {
      params.set('page', String(newPage));
    });
  }

  return {
    properties: response?.data ?? ([] as PropertyDetails[]),
    totalPages: response?.meta.totalPages ?? 1,
    totalItems: response?.meta.totalItems ?? 0,
    page,
    isLoading,

    applyFilters,
    changeSort,
    setPage,
  };
}
