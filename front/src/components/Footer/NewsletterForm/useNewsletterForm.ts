import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { NewsletterFormData } from './newsletterSchema';
import { newsletterSchema } from './newsletterSchema';
import type { NewsletterFormProps } from './newsletterForm.type';

export function useNewsletterForm({ setShowNewsletterForm }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: NewsletterFormData) => {
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

  return { onSubmit, register, handleSubmit, errors, isSubmitting };
}
