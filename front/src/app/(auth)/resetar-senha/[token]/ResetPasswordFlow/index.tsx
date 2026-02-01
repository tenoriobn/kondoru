'use client';
import AuthLayout from 'src/components/AuthLayout';
import AuthDivider from 'src/components/AuthLayout/AuthDivider';
import StatusMessage from 'src/components/StatusMessage';
import CheckIcon from 'public/icons/check.svg';
import { useFormResetPassword } from './useFormResetPassword';
import FormResetPassword from './FormResetPassword';
import type { ResetPasswordFlowProps } from './resetPasswordFlow.type';

export default function ResetPasswordFlow({ passwordResetToken }: ResetPasswordFlowProps) {
  const { methods, onSubmit, showFormResetPassword } = useFormResetPassword(passwordResetToken);
  const isSubmitting = methods.formState.isSubmitting;

  if (!showFormResetPassword) {
    return (
      <AuthLayout title="Resetar senha">
        <StatusMessage
          message="Senha modificada com sucesso!"
          Icon={CheckIcon}
          className="text-green"
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Resetar senha" isSubmitting={isSubmitting}>
      <AuthDivider label="Digite a nova senha que deseja utiliza" />

      <FormResetPassword methods={methods} onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </AuthLayout>
  );
}
