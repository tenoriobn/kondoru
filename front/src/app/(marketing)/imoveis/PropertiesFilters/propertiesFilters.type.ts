import type { AdvancedFiltersPanelSchemaData } from './AdvancedFiltersPanel/advancedFiltersPanelSchema';
import type { PropertySortType } from './PropertySort/propertySort.type';

export interface PropertiesFiltersProps {
  onApplyFilters: (filters: AdvancedFiltersPanelSchemaData) => void;
  onSortChange: (sort: PropertySortType) => void;
  isLoading: boolean;
}
