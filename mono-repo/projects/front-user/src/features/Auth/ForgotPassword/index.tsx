import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordScreen() {
  return (
    <AuthLayout>
      <AuthDivider 
        label='Digite o e-mail cadastrado para redefinir sua senha'
      />
      {/* <ForgotPasswordForm /> */}
    </AuthLayout>
  );
}
