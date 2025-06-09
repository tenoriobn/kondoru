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

        await router.push('/');
        methods.reset();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao realizar login. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
