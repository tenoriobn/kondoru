import { useState } from 'react';
import { ILoginState } from 'src/interfaces/api/auth/ILogin';
import postData from 'src/service/requests/postData';

const useLogin = () => {
  const [login, setLogin] = useState<ILoginState>({ email: '', password: ''});
  const [messageError, setMessageError] = useState('');

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageError('');

    try {
      await postData('auth/login', login);

    } catch (error) {
      setMessageError('Usuário ou senha inválido!');
      console.error('error: ', error);
    }
  };

  return { login, setLogin, handleSubmit, messageError };
};

export default useLogin;