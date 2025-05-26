import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerFormValues, registerSchema } from './registerSchema';
import postData from 'src/shared/api/postData';
import postAccessToken from '../../services/postAccessToken';
import { useRouter } from 'next/router';
import { RegisterFormStateProps } from './register.type';

export function useRegisterForm({ setShowRegisterForm }: RegisterFormStateProps) {
  const methods = useForm<registerFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const router = useRouter();

  const onSubmit = async (data: registerFormValues) => {
    try {
      const { dateOfBirth, passwordConfirmation, ...rest } = data;

      const response =  await postData('user', {
        ...rest, 
        date_of_birth: dateOfBirth,
      });

      if (response?.accessToken) {
        await handleRegisterSuccess(response.accessToken);
      }
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: String(error) || 'Erro ao realizar login.',
      });
    }
  };

  const handleRegisterSuccess = async (accessToken: string) => {
    postAccessToken({ accessToken });
    methods.reset();
    setShowRegisterForm(false);

    handleRedirect();
  };

  const handleRedirect = () => {
    setTimeout(() => {
      router.push('/auth/login/');
      setShowRegisterForm(true);
    }, 3000);
  };

  return { methods, onSubmit };
}
