import type { UseFormReturn } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from '../advancedFiltersPanelSchema';

export type RangeFieldId = 'priceRange' | 'propertyArea';

export interface RangeControlProps {
  id: RangeFieldId;

  minLabel: string;
  maxLabel: string;

  minLimit: number;
  maxLimit: number;

  prefix?: string;
  suffix?: string;

  isLoading?: boolean;

  methods: UseFormReturn<AdvancedFiltersPanelSchemaData>;
}

export interface UseRangeControlParams {
  id: RangeFieldId;

  minLimit: number;
  maxLimit: number;

  prefix?: string;
  suffix?: string;

  methods: UseFormReturn<AdvancedFiltersPanelSchemaData>;
}
