import type { propertyFiltersOption } from './advancedFiltersPanel.type';
import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';

export const CONTRACT_OPTIONS: propertyFiltersOption<'sale' | 'rent'>[] = [
  { label: 'Venda', value: 'sale' },
  { label: 'Aluguel', value: 'rent' },
] as const;

export const PROPERTY_TYPES: propertyFiltersOption[] = [
  { label: 'Apartamento', value: 'apartment' },
  { label: 'Casa', value: 'house' },
  { label: 'Terreno', value: 'land' },
  { label: 'Comercial', value: 'commercial' },
  { label: 'Galpão', value: 'warehouse' },
  { label: 'Sítio', value: 'farm' },
] as const;

export const BEDROOM_OPTIONS: propertyFiltersOption[] = [
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
] as const;

export const BATHROOM_OPTIONS: propertyFiltersOption[] = [
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
] as const;

export const GARAGE_OPTIONS: propertyFiltersOption[] = [
  { label: 'N/A', value: 'na' },
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
];

export const FURNISHED_OPTIONS: propertyFiltersOption<'na' | 'yes' | 'no'>[] = [
  { label: 'N/A', value: 'na' },
  { label: 'Sim', value: 'yes' },
  { label: 'Não', value: 'no' },
] as const;

export const METRO_OPTIONS: propertyFiltersOption<'na' | 'yes' | 'no'>[] = [
  { label: 'N/A', value: 'na' },
  { label: 'Sim', value: 'yes' },
  { label: 'Não', value: 'no' },
] as const;

export const DEFAULT_FILTERS: AdvancedFiltersPanelSchemaData = {
  location: '',

  contractType: 'rent',

  propertyTypes: [],

  priceRangeMin: 500,
  priceRangeMax: 25000,

  propertyAreaMin: 20,
  propertyAreaMax: 1000,

  bedrooms: '1+',
  bathrooms: '1+',

  garageSpots: 'na',

  furnished: 'na',

  nearMetro: 'na',
};
