import { useState, useEffect } from 'react';
import { httpGet } from 'src/services';
import type { PropertiesResponse, Property } from './PropertiesList/propertiesList.type';
import type { AdvancedFiltersPanelSchemaData } from './PropertiesFilters/AdvancedFiltersPanel/advancedFiltersPanelSchema';
import type { PropertySortType } from './PropertiesFilters/PropertySort/propertySort.type';

export function usePropertiesSearch() {
  const [filters, setFilters] = useState<Partial<AdvancedFiltersPanelSchemaData>>({});
  const [sort, setSort] = useState<PropertySortType>('');
  const [page, setPage] = useState(1);

  const [properties, setProperties] = useState<Property[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setIsLoading(true);

        const params = new URLSearchParams({
          page: String(page),
          limit: '6',
          sort,
          ...Object.fromEntries(Object.entries(filters).map(([k, v]) => [k, String(v)])),
        });

        const response = await httpGet<PropertiesResponse>(`/properties?${params.toString()}`);

        await new Promise((resolve) => setTimeout(resolve, 3000));

        setProperties(response.data);
        setTotalPages(response.meta.totalPages);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, [page, sort, filters]);

  async function applyFilters(data: AdvancedFiltersPanelSchemaData) {
    setPage(1);
    setFilters(data);
    await new Promise((resolve) => setTimeout(resolve, 300000));
  }

  function changeSort(value: PropertySortType) {
    setPage(1);
    setSort(value);
  }

  return {
    properties,
    page,
    setPage,
    totalPages,
    isLoading,

    applyFilters,
    changeSort,
  };
}
