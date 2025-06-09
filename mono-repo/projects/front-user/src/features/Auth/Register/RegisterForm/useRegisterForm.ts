import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerFormValues, registerSchema } from './registerSchema';
import postAccessToken from '../../services/postAccessToken';
import { useRouter } from 'next/router';
import { RegisterFormStateProps } from './register.type';
import { postData } from 'src/shared';

export function useRegisterForm({ setShowRegisterForm }: RegisterFormStateProps) {
  const methods = useForm<registerFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const router = useRouter();

  const onSubmit = async (data: registerFormValues) => {
    try {
      const { dateOfBirth, passwordConfirmation, ...rest } = data;

      const response =  await postData('user', { ...rest, date_of_birth: dateOfBirth, });

      if (response?.accessToken) {
        await handleRegisterSuccess(response.accessToken);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao realizar cadastro. Tente novamente!',
      });
    }
  };

  const handleRegisterSuccess = async (accessToken: string) => {
    postAccessToken({ accessToken });
    setShowRegisterForm(false);
    handleRedirect();
  };

  const handleRedirect = () => {
    setTimeout(async () => {
      await router.push('/auth/login/');
      methods.reset();
      setShowRegisterForm(true);
    }, 3000);
  };

  return { methods, onSubmit };
}
