'use client';
import AuthLayout from 'src/components/AuthLayout';
import AuthDivider from 'src/components/AuthLayout/AuthDivider';
import AuthFooter from 'src/components/AuthLayout/AuthFooter';
import TermsAndGoogleLogin from 'src/components/AuthLayout/TermsAndGoogleLogin';
import GoogleAuthProvider from 'src/providers/GoogleAuthProvider';
import FormRegister from './FormRegister';
import { useFormRegister } from './useFormRegister';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';

export default function SignUp() {
  const { methods, onSubmit, showRegisterForm } = useFormRegister();
  const isSubmitting = methods.formState.isSubmitting;

  if (!showRegisterForm) {
    return (
      <AuthLayout title="Entrar na sua conta">
        <StatusMessage
          message="Cadastro realizado com sucesso!"
          Icon={CheckIcon}
          className="text-green"
        />
      </AuthLayout>
    );
  }

  return (
    <GoogleAuthProvider>
      <AuthLayout title="Entrar na sua conta" isSubmitting={isSubmitting}>
        <TermsAndGoogleLogin isSubmitting={isSubmitting} />

        <AuthDivider label="ou cadastre-se com seu e-mail" />

        <FormRegister methods={methods} onSubmit={onSubmit} isSubmitting={isSubmitting} />

        <AuthFooter
          message="Já tem conta?"
          linkText="Faça login"
          linkHref="login"
          isSubmitting={isSubmitting}
        />
      </AuthLayout>
    </GoogleAuthProvider>
  );
}
