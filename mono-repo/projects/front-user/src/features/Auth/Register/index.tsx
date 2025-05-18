import AuthLayout from 'src/features/Auth/AuthLayout';
import TermsAndGoogleLogin from '../AuthLayout/TermsAndGoogleLogin';
import AuthDivider from '../AuthLayout/AuthDivider';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthLayout/AuthFooter';

export default function RegisterScreen() {
  return (
    <AuthLayout>
      <TermsAndGoogleLogin />
      <AuthDivider label='ou cadastre-se com seu e-mail' />
      <RegisterForm />
      <AuthFooter message="Já tem conta?" linkText="Faça login" linkHref="login" />
    </AuthLayout>
  );
}
