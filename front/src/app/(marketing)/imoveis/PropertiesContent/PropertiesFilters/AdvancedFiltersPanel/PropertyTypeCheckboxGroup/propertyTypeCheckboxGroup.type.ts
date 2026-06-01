import type { UseFormReturn } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from '../advancedFiltersPanelSchema';

export interface PropertyTypeOption {
  label: string;
  value: string;
}

export interface PropertyTypeCheckboxGroupProps {
  types: PropertyTypeOption[];
  methods: UseFormReturn<AdvancedFiltersPanelSchemaData>;
  isLoading: boolean;
}
