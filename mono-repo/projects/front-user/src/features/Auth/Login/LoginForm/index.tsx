import ForgotPasswordLink from './ForgotPasswordLink';
import Form from 'components/Form';
import { useLoginForm } from './useLoginForm';
import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import { InputGroup, InputPassword, InputField } from 'src/components/Inputs';
import { AnimatedDots, AuthButton } from 'src/styles';

export default function LoginForm() {
  const { methods, onSubmit } = useLoginForm();
  const formErrorMessage = methods.formState.errors.root?.message;
  const isSubmitting = methods.formState.isSubmitting;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputGroup formErrorMessage={formErrorMessage}>
        <InputField 
          id="email" 
          type="email" 
          label="E-mail" 
          icon={<EmailIcon />} 
        />

        <InputPassword
          id="password"
          label="Senha"
          icon={<LockIcon />}
        />
      </InputGroup>

      <ForgotPasswordLink />
      <AuthButton disabled={isSubmitting}>
        {isSubmitting ? <>Entrando<AnimatedDots /></> : 'Entrar'}
      </AuthButton>
    </Form>
  );
}
