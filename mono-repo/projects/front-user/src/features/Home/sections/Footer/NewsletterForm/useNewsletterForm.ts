import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { newsletterSchema, NewsletterSchema } from './newsletterSchema';
import { UseNewsletterFormData } from './newsletterForm.type';
import { SetShowNewsletterFormProps } from '../footer.type';

export function useNewsletterForm({ setShowNewsletterForm }: SetShowNewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: UseNewsletterFormData) => {
    try {
      // eslint-disable-next-line no-console
      console.log('Dados enviados:', data);
      setShowNewsletterForm(false);
      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return { onSubmit, register, handleSubmit, errors };
}
