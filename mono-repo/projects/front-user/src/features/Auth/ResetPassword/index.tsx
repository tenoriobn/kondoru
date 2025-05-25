import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import AuthFooter from '../AuthLayout/AuthFooter';
import { ResetPasswordProps } from './resetPassword.type';
import PasswordResetForm from './ResetPasswordForm';
import CheckIcon from 'public/icons/check.svg';
import AlertErrorIcon from 'public/icons/alert-error.svg';
import { useState } from 'react';
import StatusMessage from 'src/components/StatusMessage';

export default function PasswordResetScreen({ isValid, passwordResetToken }: ResetPasswordProps) {
  const [showPasswordResetForm, setShowPasswordResetForm] = useState(true);
  
  if (!showPasswordResetForm) {
    return (
      <AuthLayout>
        <StatusMessage
          message='Senha modificada com sucesso!'
          icon={CheckIcon}
          color="green"
        />
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
          <StatusMessage
            message='Token inválido ou expirado!'
            icon={AlertErrorIcon}
            color="red"
          />
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
