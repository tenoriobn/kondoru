import { GetServerSidePropsContext } from 'next';
import PasswordResetScreen from 'src/features/Auth/ResetPassword';
import { verifyResetToken } from '../../../features/Auth/ResetPassword/verifyResetToken';
import { ResetPasswordProps } from 'src/features/Auth/ResetPassword/resetPassword.type';

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
