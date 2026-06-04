export interface PropertySortProps {
  isOpen: boolean;
  selectedOption: PropertySortType;
  onSelect: (value: PropertySortType) => void;
}

export type PropertySortType =
  | 'price_asc'
  | 'price_desc'
  | 'area_asc'
  | 'area_desc'
  | 'newest'
  | '';
