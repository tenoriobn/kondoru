import AuthLayout from '../AuthLayout';
import LeftSide from '../AuthLayout/LeftSide';
import AuthDivider from '../AuthLayout/LeftSide/AuthDivider';
import AuthFooter from '../AuthLayout/LeftSide/AuthFooter';
import TermsAndGoogleLogin from '../AuthLayout/LeftSide/TermsAndGoogleLogin';
import RightSide from '../AuthLayout/RightSide';
import LoginForm from './LoginForm';

export default function LoginScreen() {
  return (
    <AuthLayout>
      <LeftSide>
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
      </LeftSide>

      <RightSide />
    </AuthLayout>
  );
}
