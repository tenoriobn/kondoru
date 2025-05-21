import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetPasswordFormValues, resetPasswordSchema } from './resetPasswordSchema';
import postData from 'src/shared/api/postData';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { showPasswordResetFormState } from 'src/shared/atom';

export function usePasswordResetForm(passwordResetToken: string) {
  const setShowPasswordResetForm = useSetRecoilState(showPasswordResetFormState);
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
        methods.reset();
        setShowPasswordResetForm(false);

        setTimeout(async () => {
          await router.push('/auth/login/');
          setShowPasswordResetForm(true);
        }, 3000);
      }
      
    } catch (error) {
      methods.setError('root', {
        type: 'manual',
        message: String(error) || 'Erro ao realizar login.',
      });
    }
  };

  return { methods, onSubmit };
}
