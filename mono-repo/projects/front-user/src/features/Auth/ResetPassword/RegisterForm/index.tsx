import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import ForgotPasswordLink from '../../Login/LoginForm/ForgotPasswordLink';
import ButtonForm from '../../AuthLayout/LeftSide/Form/ButtonForm';
import Form from '../../AuthLayout/LeftSide/Form';
import InputField from '../../AuthLayout/LeftSide/Form/InputField';

export default function RegisterForm() {
  return (
    <Form>
      <InputField id="name" type="text" label="Nome completo" icon={<UserIcon />} required />
      <InputField id="email" type="email" label="E-mail" icon={<EmailIcon />} required />
      <InputField id="password" type="password" label="Senha" icon={<LockIcon />} required />

      <ForgotPasswordLink />

      <ButtonForm>Criar conta</ButtonForm>
    </Form>
  );
}
