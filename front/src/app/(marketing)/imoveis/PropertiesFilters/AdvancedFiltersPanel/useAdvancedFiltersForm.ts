import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';
import { advancedFiltersPanelSchema } from './advancedFiltersPanelSchema';

export function useAdvancedFiltersForm() {
  return useForm<AdvancedFiltersPanelSchemaData>({
    resolver: zodResolver(advancedFiltersPanelSchema),
    mode: 'onTouched',
    defaultValues: {
      location: '',
      contractType: 'rent',
      propertyTypes: [],
      priceRangeMin: 5000,
      priceRangeMax: 25000,
      propertyAreaMin: 20,
      propertyAreaMax: 1000,
      bedrooms: '1+',
      bathrooms: '1+',
      garageSpots: 'na',
      furnished: 'na',
      nearMetro: 'na',
    },
  });
}
