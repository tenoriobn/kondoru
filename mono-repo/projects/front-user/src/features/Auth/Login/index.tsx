import AuthLayout from 'components/AuthLayout';
import AuthDivider from 'components/AuthLayout/AuthDivider';
import AuthFooter from 'components/AuthLayout/AuthFooter';
import TermsAndGoogleLogin from 'components/AuthLayout/TermsAndGoogleLogin';
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
