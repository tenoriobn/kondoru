'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthDivider from 'src/components/AuthLayout/AuthDivider';
import AuthLayout from 'src/components/AuthLayout';
import TermsAndGoogleLogin from 'src/components/AuthLayout/TermsAndGoogleLogin';
import AuthFooter from 'src/components/AuthLayout/AuthFooter';
import { useLoginForm } from './useLoginForm';
import FormLogin from './FormLogin';

export default function Login() {
  const { methods, onSubmit } = useLoginForm();
  const isSubmitting = methods.formState.isSubmitting;

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <AuthLayout title="Entrar na sua conta" isSubmitting={isSubmitting}>
        <TermsAndGoogleLogin isSubmitting={isSubmitting} />

        <AuthDivider label="ou entre com seu e-mail" />

        <FormLogin methods={methods} onSubmit={onSubmit} isSubmitting={isSubmitting} />

        <AuthFooter
          message="Ainda não tem conta?"
          linkText="Cadastre-se"
          linkHref="cadastro"
          isSubmitting={isSubmitting}
        />
      </AuthLayout>
    </GoogleOAuthProvider>
  );
}
