import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { LoginData } from './loginSchema';
import { loginSchema } from './loginSchema';
// import { useRouter } from 'next/navigation';

export function useLoginForm() {
  const methods = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  // const router = useRouter();

  const onSubmit = async (data: LoginData) => {
    try {
      console.log({ data });

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
