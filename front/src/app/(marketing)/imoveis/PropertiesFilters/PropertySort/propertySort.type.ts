import type { PropertySortType } from '../propertiesFilters.type';

export interface PropertySortProps {
  isOpen: boolean;
  selectedOption: PropertySortType;
  onSelect: (value: PropertySortType) => void;
}
