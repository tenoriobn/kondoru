import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from './loginSchema';
import postData from 'src/shared/api/postData';
import postAccessToken from '../../services/postAccessToken';

export function useLoginForm() {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: LoginFormValues) => {
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
