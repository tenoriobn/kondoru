import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from 'src/utils/registrationValidation';
import { IUseRegisterData } from 'src/interfaces/api/auth/IRegister';
import postData from 'src/service/requests/postData';

const useRegister = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<IUseRegisterData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<IUseRegisterData> = async(data) => {
    try {
      await postData('user', data);
    } catch (error) {
      if (error === 'Usuário já cadastrado!') {
        setError('email', { type: 'manual',  message: error });
      } else {
        console.error('error: ', error);
      }
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useRegister;
