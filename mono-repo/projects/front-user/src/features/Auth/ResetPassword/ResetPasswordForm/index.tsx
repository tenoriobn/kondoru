import LockIcon from 'public/icons/lock.svg';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';

export default function ResetPasswordForm() {
  return (
    <Form>
      <InputField id="password" type="password" label="Senha" icon={<LockIcon />} required />
      <InputField id="password" type="password" label="Confirmar Senha" icon={<LockIcon />} required />

      <ButtonForm>Redefinir Senha</ButtonForm>
    </Form>
  );
}
