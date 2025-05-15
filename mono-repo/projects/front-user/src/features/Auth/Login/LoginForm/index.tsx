import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import ForgotPasswordLink from './ForgotPasswordLink';
import ButtonForm from '../../AuthLayout/LeftSide/Form/ButtonForm';
import Form from '../../AuthLayout/LeftSide/Form';
import InputField from '../../AuthLayout/LeftSide/Form/InputField';

export default function LoginForm() {
  return (
    <Form>
      <InputField id="email" type="email" label="E-mail" icon={<EmailIcon />} required />
      <InputField id="password" type="password" label="Senha" icon={<LockIcon />} required />

      <ForgotPasswordLink />

      <ButtonForm>Entrar</ButtonForm>
    </Form>
  );
}
