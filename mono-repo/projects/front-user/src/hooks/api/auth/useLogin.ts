import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUseLoginData } from 'src/interfaces/api/auth/ILogin';
import postData from 'src/service/requests/postData';
import postAccessToken from 'src/service/requests/postAccessToken';
import { loginSchema } from 'src/utils/loginValidation';

const useLogin = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    setError, 
  } = useForm<IUseLoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IUseLoginData> = async(data) => {
    try {
      const response =  await postData('auth/login', data);

      if (response?.accessToken) {
        postAccessToken({ accessToken: response?.accessToken });
      }
    } catch (error) {
      if (error === 'Usuário não cadastrado!') {
        setError('email', { type: 'manual',  message: error });
      } else {
        console.error('error: ', error);
      }
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLogin;