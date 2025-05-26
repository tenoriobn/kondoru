import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import ForgotPasswordForm from './ForgotPasswordForm';
import { useState } from 'react';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';

export default function ForgotPasswordScreen() {
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(true);

  return (
    <AuthLayout>
      {showForgotPasswordForm ? (
        <>        
          <AuthDivider 
            label='Digite o e-mail cadastrado para redefinir sua senha'
          />

          <ForgotPasswordForm setShowForgotPasswordForm={setShowForgotPasswordForm} />
        </>
      ) : (
        <StatusMessage
          message='Um link de redefinição foi enviado para o seu e-mail.'
          icon={CheckIcon}
          color="green"
        />
      )}      
    </AuthLayout>
  );
}
