import { useEffect, useState } from 'react';
import { httpGet } from 'src/services';
import type { Property, PropertiesResponse } from './propertiesList.type';

export function usePropertiesList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setIsLoading(true);

        const response = await httpGet<PropertiesResponse>(`/properties?page=${page}&limit=6`);

        setProperties(response.data);
        setTotalPages(response.meta.totalPages);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro ao buscar imóveis', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, [page]);

  return {
    properties,
    page,
    setPage,
    totalPages,
    isLoading,
  };
}
