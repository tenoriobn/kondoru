import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { forgotPasswordValues, forgotPasswordSchema } from './forgotPasswordSchema';
import postData from 'src/shared/api/postData';
import postAccessToken from '../../services/postAccessToken';

export function useForgotPasswordForm() {
  const methods = useForm<forgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: forgotPasswordValues) => {
    try {
      const response =  await postData('auth/login', data);

      if (response?.accessToken) {
        postAccessToken({ accessToken: response?.accessToken });

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
