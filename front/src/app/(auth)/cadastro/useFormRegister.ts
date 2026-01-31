import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterData } from './registerSchema';
import type { UseFormRegisterProps } from './register.type';
// import { useRouter } from 'next/navigation';

export function useFormRegister({ setShowRegisterForm }: UseFormRegisterProps) {
  const methods = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  // const router = useRouter();

  const onSubmit = async (data: RegisterData) => {
    try {
      console.log({ data });

      await new Promise((resolve) => setTimeout(resolve, 300000));

      if (data) {
        setShowRegisterForm(false);
      }
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao realizar cadastro. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
