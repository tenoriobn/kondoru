import { AxiosError } from 'axios';
import { useState } from 'react';
import { ILoginState } from 'src/interfaces/api/auth/ILogin';
import postData from 'src/service/requests/postData';

const useLogin = () => {
  const [login, setLogin] = useState<ILoginState>({ email: '', password: ''});
  const [messageError, setMessageError] = useState<string>('');

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postData('auth/login', login);
      setMessageError('');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.message === 'Usuário não cadastrado!') {
          setMessageError('Usuário ou senha inválido!');
        } else {
          setMessageError(error.message);
        }
      }
    }
  };

  return { login, setLogin, handleSubmit, messageError };
};

export default useLogin;