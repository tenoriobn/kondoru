import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetPasswordFormValues, resetPasswordSchema } from './resetPasswordSchema';
import { useRouter } from 'next/router';
import { ResetPasswordFormProps } from './ResetPasswordForm.type';
import { postData } from 'src/shared';

export function usePasswordResetForm({passwordResetToken, setShowPasswordResetForm }: ResetPasswordFormProps) {
  const methods = useForm<resetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
  });

  const router = useRouter();

  const onSubmit = async (data: resetPasswordFormValues) => {
    try {     
      const { password } = data;

      const response = await postData('user/reset-password', {
        token: passwordResetToken, 
        password
      });

      if (response) {
        setShowPasswordResetForm(false);

        setTimeout(async () => {
          await router.push('/auth/login/');
          methods.reset();
          setShowPasswordResetForm(true);
        }, 3000);
      }
      
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      
      methods.setError('root', {
        type: 'manual',
        message: 'Erro ao resetar senha. Tente novamente!',
      });
    }
  };

  return { methods, onSubmit };
}
