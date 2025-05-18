import ForgotPasswordLink from './ForgotPasswordLink';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import { useLoginForm } from './useLoginForm';
import InputField from '../../AuthLayout/Form/InputField';
import InputFieldGroup from '../../AuthLayout/Form/InputFieldGroup';
import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';

export default function LoginForm() {
  const { methods, onSubmit } = useLoginForm();
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputFieldGroup formErrorMessage={formErrorMessage}>
        <InputField 
          id="email" 
          type="email" 
          label="E-mail" 
          icon={<EmailIcon />} 
        />

        <InputField 
          id="password"
          type="password"
          label="Senha"
          icon={<LockIcon />}
        />
      </InputFieldGroup>

      <ForgotPasswordLink />
      <ButtonForm>Entrar</ButtonForm>
    </Form>
  );
}
