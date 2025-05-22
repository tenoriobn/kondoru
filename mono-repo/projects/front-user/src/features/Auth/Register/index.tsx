import AuthLayout from 'src/features/Auth/AuthLayout';
import TermsAndGoogleLogin from '../AuthLayout/TermsAndGoogleLogin';
import AuthDivider from '../AuthLayout/AuthDivider';
import RegisterForm from './RegisterForm';
import AuthFooter from '../AuthLayout/AuthFooter';
import { useRecoilValue } from 'recoil';
import { showRegisterFormState } from 'src/shared/atom';
import CheckedMessage from 'src/components/CheckedMessage';

export default function RegisterScreen() {
  const showRegisterForm = useRecoilValue(showRegisterFormState);

  if (!showRegisterForm) {
    return (
      <AuthLayout>
        <CheckedMessage message="Cadastro realizado com sucesso!" />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <TermsAndGoogleLogin />
      <AuthDivider label='ou cadastre-se com seu e-mail' />
      <RegisterForm />
      <AuthFooter message="Já tem conta?" linkText="Faça login" linkHref="login" />
    </AuthLayout>
  );
}
