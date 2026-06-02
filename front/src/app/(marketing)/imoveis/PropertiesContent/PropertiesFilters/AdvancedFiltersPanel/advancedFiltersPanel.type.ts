import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';
import type {
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  FURNISHED_OPTIONS,
  GARAGE_OPTIONS,
  METRO_OPTIONS,
} from './propertyFilters';

export interface AdvancedFiltersPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: AdvancedFiltersPanelSchemaData) => void;
  isLoading: boolean;
}

export type propertyFiltersOption<T = string> = {
  label: string;
  value: T;
};

export type BedroomValue = (typeof BEDROOM_OPTIONS)[number]['value'];

export type BathroomsValue = (typeof BATHROOM_OPTIONS)[number]['value'];

export type GarageSpotsValue = (typeof GARAGE_OPTIONS)[number]['value'];

export type FurnishedValue = (typeof FURNISHED_OPTIONS)[number]['value'];

export type NearMetroValue = (typeof METRO_OPTIONS)[number]['value'];
