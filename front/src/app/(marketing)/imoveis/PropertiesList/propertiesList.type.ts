import type { Dispatch, SetStateAction } from 'react';

export interface Property {
  id: string;
  href: string;
  imgSrc: string;
  title: string;
  location: string;
  price: string;
}

export interface PropertiesResponse {
  data: Property[];
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface PropertiesListProps {
  properties: Property[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  isLoading: boolean;
}
