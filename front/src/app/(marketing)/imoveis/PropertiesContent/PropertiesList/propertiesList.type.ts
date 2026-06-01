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
  setPage: (page: number) => void;
  totalPages: number;
  isLoading: boolean;
}
