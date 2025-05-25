import AuthLayout from 'src/features/Auth/AuthLayout';
import TermsAndGoogleLogin from '../AuthLayout/TermsAndGoogleLogin';
import AuthDivider from '../AuthLayout/AuthDivider';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthLayout/AuthFooter';
import CheckedMessage from 'src/components/CheckedMessage';
import { useState } from 'react';

export default function RegisterScreen() {
  const [showRegisterForm, setShowRegisterForm] = useState(true);

  if (!showRegisterForm) {
    return (
      <AuthLayout>
        <CheckedMessage message="Cadastro realizado com sucesso!" />
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
