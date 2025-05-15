import AuthLayout from '../AuthLayout';
import LeftSide from '../AuthLayout/LeftSide';
import AuthDivider from '../AuthLayout/LeftSide/AuthDivider';
import RightSide from '../AuthLayout/RightSide';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordScreen() {
  return (
    <AuthLayout>
      <LeftSide>
        <AuthDivider 
          label='Digite o e-mail cadastrado para redefinir sua senha'
        />
        <ForgotPasswordForm />
      </LeftSide>

      <RightSide />
    </AuthLayout>
  );
}
