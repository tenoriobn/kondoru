import { useRecoilValue } from 'recoil';
import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import AuthFooter from '../AuthLayout/AuthFooter';
import { ResetPasswordProps } from './resetPassword.type';
import PasswordResetForm from './ResetPasswordForm';
import CheckedMessage from 'src/components/CheckedMessage';
import ErrorMessage from 'src/components/ErrorMessage';
import { useState } from 'react';

export default function PasswordResetScreen({ isValid, passwordResetToken }: ResetPasswordProps) {
  const [showPasswordResetForm, setShowPasswordResetForm] = useState(true);
  
  if (!showPasswordResetForm) {
    return (
      <AuthLayout>
        <CheckedMessage message="Senha modificada com sucesso!" />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      {isValid ? (
        <>
          <AuthDivider label='Digite a nova senha que deseja utilizar' />
          <PasswordResetForm 
            passwordResetToken={passwordResetToken} 
            setShowPasswordResetForm={setShowPasswordResetForm}
          />
        </>
      ) : (
        <>
          <ErrorMessage message='Token inválido ou expirado!' />
          <AuthFooter
            message="Ainda deseja recuperar a senha?"
            linkText="Clique aqui"
            linkHref="/auth/recuperar-senha"
          />
        </>
      )}
    </AuthLayout>
  );
}
