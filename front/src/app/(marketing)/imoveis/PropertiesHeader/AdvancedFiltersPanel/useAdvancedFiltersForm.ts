import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';
import { advancedFiltersPanelSchema } from './advancedFiltersPanelSchema';

export function useAdvancedFiltersForm() {
  const methods = useForm<AdvancedFiltersPanelSchemaData>({
    resolver: zodResolver(advancedFiltersPanelSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AdvancedFiltersPanelSchemaData) => {
    try {
      console.log({ data });

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
