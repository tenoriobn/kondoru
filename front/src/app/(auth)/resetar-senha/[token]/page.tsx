import AuthLayout from 'src/components/AuthLayout';
import StatusMessage from 'src/components/StatusMessage';
import AlertErrorIcon from 'public/icons/alert-error.svg';
import ResetPasswordFlow from './ResetPasswordFlow';
import type { ResetPasswordPageProps } from './resetPasswordPage.type';
import AuthFooter from 'src/components/AuthLayout/AuthFooter';

export default async function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = await params;
  const isValid = token === 'token-valido-exemplo';

  if (!isValid) {
    return (
      <AuthLayout title="Resetar senha">
        <StatusMessage
          message="Token inválido ou expirado!"
          Icon={AlertErrorIcon}
          className="text-red"
        />

        <AuthFooter
          message="Ainda deseja recuperar a senha?"
          linkText="Clique aqui"
          linkHref="/recuperar-senha"
        />
      </AuthLayout>
    );
  }

  return <ResetPasswordFlow passwordResetToken={token} />;
}
