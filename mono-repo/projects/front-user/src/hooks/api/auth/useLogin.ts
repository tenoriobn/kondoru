import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUseLoginData } from 'src/interfaces/api/auth/ILogin';
import postData from 'src/service/requests/postData';
import postAccessToken from 'src/service/requests/postAccessToken';
import { loginSchema } from 'src/utils/loginValidation';
import React, { useEffect, useState } from 'react';

const useLogin = (setActiveAuthForm: React.Dispatch<React.SetStateAction<string>>) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm<IUseLoginData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (!errors.email && !errors.password) {
      setErrorMessage('');
    }
  }, [errors.email, errors.password]);

  const onSubmit: SubmitHandler<IUseLoginData> = async(data) => {
    try {
      const response =  await postData('auth/login', data);

      if (response?.accessToken) {
        postAccessToken({ accessToken: response?.accessToken });
      }

      setErrorMessage('');
      setActiveAuthForm('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Usuário ou senha incorretos.');
    }
  };

  return { register, handleSubmit, onSubmit, errors, errorMessage };
};

export default useLogin;