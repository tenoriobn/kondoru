export interface AdvancedFiltersPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export type propertyFiltersOption<T = string> = {
  label: string;
  value: T;
};
