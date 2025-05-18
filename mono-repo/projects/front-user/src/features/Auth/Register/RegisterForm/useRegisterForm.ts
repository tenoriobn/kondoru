import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerFormValues, registerSchema } from './registerSchema';
import postData from 'src/shared/api/postData';
import postAccessToken from '../../services/postAccessToken';

export function useRegisterForm() {
  const methods = useForm<registerFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: registerFormValues) => {
    try {
      const { dateOfBirth, passwordConfirmation, ...rest } = data;

      const response =  await postData('user', {
        ...rest, 
        date_of_birth: dateOfBirth,
      });

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
