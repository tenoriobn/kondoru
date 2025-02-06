import { useState } from "react";
import { ILoginState } from "src/interfaces/api/auth/ILogin";
import postData from "src/service/requests/postData";

const useLogin = () => {
  const [login, setLogin] = useState<ILoginState>({ email: '', password: ''});
  const [messageError, setMessageError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postData('auth/login', login);
      console.log(response);
      setMessageError('');
    } catch (error: any) {
      console.log('catch error: ', error)

      if (error.message === 'Usuário não cadastrado!') {
        setMessageError('Usuário ou senha inválido!');
      } else {
        setMessageError(error.message);
      }
    }
  };

  return { login, setLogin, handleSubmit, messageError }
}

export default useLogin;