import AuthLayout from 'src/components/AuthLayout';
import TermsAndGoogleLogin from 'components/AuthLayout/TermsAndGoogleLogin';
import AuthDivider from 'components/AuthLayout/AuthDivider';
import RegisterForm from './RegisterForm';
import AuthFooter from 'components/AuthLayout/AuthFooter';
import CheckIcon from 'public/icons/check.svg';
import { useState } from 'react';
import StatusMessage from 'src/components/StatusMessage';

export default function RegisterScreen() {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  if (!showRegisterForm) {
    return (
      <AuthLayout>
        <StatusMessage
          message='Cadastro realizado com sucesso!'
          icon={CheckIcon}
          color="green"
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <TermsAndGoogleLogin />
      <AuthDivider label='ou cadastre-se com seu e-mail' />
      <RegisterForm setShowRegisterForm={setShowRegisterForm} />
      <AuthFooter message="Já tem conta?" linkText="Faça login" linkHref="login" />
    </AuthLayout>
  );
}
