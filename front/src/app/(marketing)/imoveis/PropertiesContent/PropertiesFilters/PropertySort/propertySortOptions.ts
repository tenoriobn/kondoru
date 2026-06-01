import type { PropertySortType } from './propertySort.type';

export const PROPERTY_SORT_OPTIONS: {
  label: string;
  value: PropertySortType;
}[] = [
  { label: 'Relevância', value: 'relevance' },
  { label: 'Menor preço', value: 'price_asc' },
  { label: 'Maior preço', value: 'price_desc' },
  { label: 'Menor área', value: 'area_asc' },
  { label: 'Maior área', value: 'area_desc' },
  { label: 'Mais recentes', value: 'newest' },
];
