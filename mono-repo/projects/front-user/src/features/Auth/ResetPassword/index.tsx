import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordScreen() {
  return (
    <AuthLayout>
      <AuthDivider 
        label='Digite a nova senha que deseja utilizar'
      />
      {/* <ResetPasswordForm /> */}
    </AuthLayout>
  );
}
