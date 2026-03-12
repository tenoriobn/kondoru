import type { propertyFiltersOption } from './advancedFiltersPanel.type';

export const CONTRACT_OPTIONS: propertyFiltersOption<'sale' | 'rent'>[] = [
  { label: 'Venda', value: 'sale' },
  { label: 'Aluguel', value: 'rent' },
];

export const PROPERTY_TYPES: propertyFiltersOption[] = [
  { label: 'Apartamento', value: 'apartment' },
  { label: 'Casa', value: 'house' },
  { label: 'Terreno', value: 'land' },
  { label: 'Comercial', value: 'commercial' },
  { label: 'Galpão', value: 'warehouse' },
  { label: 'Sítio', value: 'farm' },
];

export const BEDROOM_OPTIONS: propertyFiltersOption[] = [
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
];

export const BATHROOM_OPTIONS: propertyFiltersOption[] = [
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
];

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
];

export const METRO_OPTIONS: propertyFiltersOption<'na' | 'yes' | 'no'>[] = [
  { label: 'N/A', value: 'na' },
  { label: 'Sim', value: 'yes' },
  { label: 'Não', value: 'no' },
];
