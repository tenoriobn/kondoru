import LockIcon from 'public/icons/lock.svg';
import ButtonForm from '../../AuthLayout/LeftSide/Form/ButtonForm';
import Form from '../../AuthLayout/LeftSide/Form';
import InputField from '../../AuthLayout/LeftSide/Form/InputField';

export default function ResetPasswordForm() {
  return (
    <Form>
      <InputField id="password" type="password" label="Senha" icon={<LockIcon />} required />
      <InputField id="password" type="password" label="Confirmar Senha" icon={<LockIcon />} required />

      <ButtonForm>Redefinir Senha</ButtonForm>
    </Form>
  );
}
