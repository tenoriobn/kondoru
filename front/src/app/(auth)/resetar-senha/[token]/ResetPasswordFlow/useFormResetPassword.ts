import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { ResetPasswordData } from './resetPasswordSchema';
import { resetPasswordSchema } from './resetPasswordSchema';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';

export function useFormResetPassword(passwordResetToken: string) {
  const [showFormResetPassword, setShowFormResetPassword] = useState(true);

  const methods = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
  });

  // const router = useRouter();

  const onSubmit = async (data: ResetPasswordData) => {
    try {
      const { password } = data;

      console.log({ password, token: passwordResetToken });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (data) {
        setShowFormResetPassword(false);
      }

      /* 
        - Enviar dados na requisição
        - Esperar resposta da troca de senha
        - Exibir mensagem de sucesso ou erro
        - Em caso de sucesso, levar para a página de login, após 5s de exibição da mensagem
      */
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao resetar senha. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit, showFormResetPassword };
}
