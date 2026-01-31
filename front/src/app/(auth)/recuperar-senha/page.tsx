'use client';
import { useState } from 'react';
import AuthLayout from 'src/components/AuthLayout';
import AuthDivider from 'src/components/AuthLayout/AuthDivider';
import AuthFooter from 'src/components/AuthLayout/AuthFooter';
import TermsAndGoogleLogin from 'src/components/AuthLayout/TermsAndGoogleLogin';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';
import FormForgotPassword from './FormForgotPassword';
import { useFormForgotPassword } from './useFormForgotPassword';

export default function ForgotPassword() {
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(true);
  const { methods, onSubmit } = useFormForgotPassword({ setShowForgotPasswordForm });
  const isSubmitting = methods.formState.isSubmitting;

  if (!showForgotPasswordForm) {
    return (
      <AuthLayout title="Recuperar senha">
        <StatusMessage
          message="Um link de redefinição foi enviado para o seu e-mail."
          Icon={CheckIcon}
          className="text-green"
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Entrar na sua conta" isSubmitting={isSubmitting}>
      <AuthDivider label="Digite o e-mail cadastrado para redefinir sua senha" />

      <FormForgotPassword methods={methods} onSubmit={onSubmit} isSubmitting={isSubmitting} />

      {showForgotPasswordForm && (
        <AuthFooter
          message="Lembrou da senha?"
          linkText="Faça login"
          linkHref="login"
          isSubmitting={isSubmitting}
        />
      )}
    </AuthLayout>
  );
}
