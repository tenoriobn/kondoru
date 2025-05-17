import AuthLayout from '../AuthLayout';
import AuthDivider from '../AuthLayout/AuthDivider';
import AuthFooter from '../AuthLayout/AuthFooter';
import TermsAndGoogleLogin from '../AuthLayout/TermsAndGoogleLogin';
import LoginForm from './LoginForm';

export default function LoginScreen() {
  return (
    <AuthLayout>
      <TermsAndGoogleLogin />

      <AuthDivider 
        label='ou entre com seu e-mail' 
      />

      <LoginForm />
      
      <AuthFooter
        message="Ainda não tem conta?"
        linkText="Cadastre-se"
        linkHref="cadastro"
      />
    </AuthLayout>
  );
}
