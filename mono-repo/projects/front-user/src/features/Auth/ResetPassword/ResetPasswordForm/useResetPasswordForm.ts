import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetPasswordFormValues, resetPasswordSchema } from './resetPasswordSchema';
import postData from 'src/shared/api/postData';
import postAccessToken from '../../services/postAccessToken';

export function useResetPasswordForm() {
  const methods = useForm<resetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: resetPasswordFormValues) => {
    try {
      const response =  await postData('user', data);

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
