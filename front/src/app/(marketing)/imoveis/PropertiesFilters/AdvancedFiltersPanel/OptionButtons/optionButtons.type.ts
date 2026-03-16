import type { UseFormReturn, Path } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from '../advancedFiltersPanelSchema';

export interface Option {
  label: string;
  value: string;
}

export interface OptionButtonsProps {
  name: Path<AdvancedFiltersPanelSchemaData>;
  options: Option[];
  methods: UseFormReturn<AdvancedFiltersPanelSchemaData>;
  isLoading: boolean;
}
