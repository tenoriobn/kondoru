import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { forgotPasswordValues, forgotPasswordSchema } from './forgotPasswordSchema';
import postData from 'src/shared/api/postData';

export function useForgotPasswordForm() {
  const methods = useForm<forgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: forgotPasswordValues) => {
    try {
      const response =  await postData('user/forgot-password', data);

      if (response) {
        methods.reset();
      }
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: String(error) || 'Erro ao realizar login.',
      });
    }
  };

  return { methods, onSubmit };
}
