import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';
import { advancedFiltersPanelSchema } from './advancedFiltersPanelSchema';

export function useAdvancedFiltersForm() {
  const methods = useForm<AdvancedFiltersPanelSchemaData>({
    resolver: zodResolver(advancedFiltersPanelSchema),
    mode: 'onTouched',
    defaultValues: {
      location: '',
      contractType: 'sale',
      propertyTypes: [],
      priceRangeMin: 500,
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

  const onSubmit = async (data: AdvancedFiltersPanelSchemaData) => {
    const payload = {
      ...data,
    };

    try {
      console.log({ payload });

      await new Promise((resolve) => setTimeout(resolve, 300000));
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao realizar cadastro. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
