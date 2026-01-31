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

      if (data) {
        setShowRegisterForm(false);
      }

      // 🔥 SIMULA REQUEST
      await new Promise((resolve) => setTimeout(resolve, 300000));

      // sucesso fake
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao realizar login. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
