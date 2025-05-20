import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import { ResetPasswordProps } from './resetPassword.type';
import PasswordResetForm from './ResetPasswordForm';

export default function PasswordResetScreen({ isValid, passwordResetToken }: ResetPasswordProps) {
  return (
    <AuthLayout>
      <AuthDivider 
        label={ isValid 
          ? 'Digite a nova senha que deseja utilizar'
          : 'Token inválido ou expirado!'
        }
      />

      {isValid && <PasswordResetForm passwordResetToken={passwordResetToken} />}
    </AuthLayout>
  );
}
