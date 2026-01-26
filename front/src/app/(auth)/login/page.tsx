'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthDivider from 'src/components/AuthLayout/AuthDivider';
import AuthLayout from 'src/components/AuthLayout';
import TermsAndGoogleLogin from 'src/components/AuthLayout/TermsAndGoogleLogin';
import AuthFooter from 'src/components/AuthLayout/AuthFooter';

export default function Login() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <AuthLayout>
        <TermsAndGoogleLogin />

        <AuthDivider label="ou entre com seu e-mail" />

        <AuthFooter message="Ainda não tem conta?" linkText="Cadastre-se" linkHref="cadastro" />
      </AuthLayout>
    </GoogleOAuthProvider>
  );
}

//Fazer o LoginForm
//Fazer o AuthFooter
//Verificar se falta componentizar algum trecho.
