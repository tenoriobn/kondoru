import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactFormSchema, type ContactFormData } from './contactFormSchema';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

export function useContactForm() {
  const [showContactForm, setShowContactForm] = useState(true);

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  // const router = useRouter();

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log({ data });

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (data) {
        setShowContactForm(false);
      }
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao tentar enviar mensagem. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit, showContactForm };
}
