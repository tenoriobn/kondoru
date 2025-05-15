import AuthLayout from 'src/features/Auth/AuthLayout';
import TermsAndGoogleLogin from '../AuthLayout/LeftSide/TermsAndGoogleLogin';
import AuthDivider from '../AuthLayout/LeftSide/AuthDivider';
import LeftSide from 'src/features/Auth/AuthLayout/LeftSide';
import RightSide from '../AuthLayout/RightSide';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthLayout/LeftSide/AuthFooter';

export default function RegisterScreen() {
  return (
    <AuthLayout>
      <LeftSide>
        <TermsAndGoogleLogin />
        <AuthDivider label='ou cadastre-se com seu e-mail' />
        <RegisterForm />
        <AuthFooter message="Já tem conta?" linkText="Faça login" linkHref="login" />
      </LeftSide>

      <RightSide />
    </AuthLayout>
  );
}
