import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { ForgotPasswordData } from './forgotPasswordSchema';
import { forgotPasswordSchema } from './forgotPasswordSchema';
import type { UseFormForgotPasswordProps } from './forgotPassword.type';
// import { useRouter } from 'next/navigation';

export function useFormForgotPassword({ setShowForgotPasswordForm }: UseFormForgotPasswordProps) {
  const methods = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onTouched',
  });

  // const router = useRouter();

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      console.log({ data });

      await new Promise((resolve) => setTimeout(resolve, 300000));

      if (data) {
        setShowForgotPasswordForm(false);
      }
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao tentar recuperar senha. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
