/* eslint-disable no-console */
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from 'src/utils/registrationValidation';
import { IUseRegisterData } from 'src/interfaces/api/auth/IRegister';
import postData from 'src/service/requests/postData';
import { useState } from 'react';
import postAccessToken from 'src/service/requests/postAccessToken';

const useRegister = (setActiveAuthForm: React.Dispatch<React.SetStateAction<string>>) => {
  const [authorization, setAuthorization] = useState(false);
  const { 
    register, 
    handleSubmit, 
    setError ,
    formState: { errors },
  } = useForm<IUseRegisterData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<IUseRegisterData> = async(data) => {
    try {
      const response = await postData('user', { ...data, authorization });

      if (response.accessToken) {
        postAccessToken({ accessToken: response?.accessToken });
      }

      setActiveAuthForm('');
    } catch (error) {
      if (error === 'Usuário já cadastrado!') {
        setError('email', { 
          type: 'manual',  
          message: 'E-mail já cadastrado!', 
        });
      } else {
        console.error('error: ', error);
      }
    }
  };

  return { authorization, setAuthorization, register, handleSubmit, onSubmit, errors };
};

export default useRegister;
