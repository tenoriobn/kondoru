import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from './loginSchema';
import postAccessToken from '../../services/postAccessToken';
import { useRouter } from 'next/router';
import { postData } from 'src/shared';

export function useLoginForm() {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response =  await postData('auth/login', data);

      if (response?.accessToken) {
        postAccessToken({ accessToken: response?.accessToken });

        router.push('/');
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
