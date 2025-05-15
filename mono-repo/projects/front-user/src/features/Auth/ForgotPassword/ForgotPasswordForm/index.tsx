import EmailIcon from 'public/icons/email.svg';
import ButtonForm from '../../AuthLayout/LeftSide/Form/ButtonForm';
import Form from '../../AuthLayout/LeftSide/Form';
import InputField from '../../AuthLayout/LeftSide/Form/InputField';

export default function ForgotPasswordForm() {
  return (
    <Form>
      <InputField id="email" type="email" label="E-mail" icon={<EmailIcon />} required />

      <ButtonForm>Recuperar Senha</ButtonForm>
    </Form>
  );
}
