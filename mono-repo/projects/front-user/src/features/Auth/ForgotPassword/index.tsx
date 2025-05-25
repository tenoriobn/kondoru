import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import ForgotPasswordForm from './ForgotPasswordForm';
import CheckedMessage from 'src/components/CheckedMessage';
import { useState } from 'react';

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
        <CheckedMessage
          message='Um link de redefinição foi enviado para o seu e-mail.'
        />
      )}      
    </AuthLayout>
  );
}
