import { GetServerSidePropsContext } from 'next';
import PasswordResetScreen from 'features/Auth/ResetPassword';
import { verifyResetToken } from 'features/Auth/services/verifyResetToken';
import { ResetPasswordProps } from 'features/Auth/ResetPassword/resetPassword.type';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = context.params!;
  const isValid = await verifyResetToken(token as string);

  return {
    props: {
      isValid,
      passwordResetToken: isValid ? token : null,
    },
  };
}

export default function ResetarSenha({ isValid, passwordResetToken }: ResetPasswordProps) {
  return (
    <PasswordResetScreen isValid={isValid} passwordResetToken={passwordResetToken} />
  );
}
