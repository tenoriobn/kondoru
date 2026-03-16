import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';

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
