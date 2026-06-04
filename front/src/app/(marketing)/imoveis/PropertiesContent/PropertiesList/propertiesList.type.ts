export interface PropertyDetails {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  gallery: string[];
  contractType: 'sale' | 'rent';
  propertyType: 'house' | 'apartment' | 'condominium' | 'penthouse' | 'land' | 'commercial';
  location: {
    city: string;
    state: string;
    neighborhood: string;
  };
  price: number;
  condominiumFee: number | null;
  iptu: number | null;
  furnished: boolean;
  nearMetro: boolean;
  bedrooms: number;
  bathrooms: number;
  garageSpots: number;
  area: number;
  lotArea: number | null;
  description: string;
  features: string[];
  tags: string[];
  status: 'available';
  featured: boolean;
  createdAt: string;
}

export interface PropertiesResponse {
  data: PropertyDetails[];
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface PropertiesListProps {
  properties: PropertyDetails[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  isLoading: boolean;
}
