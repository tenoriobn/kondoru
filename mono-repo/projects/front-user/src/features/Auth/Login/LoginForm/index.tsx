import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import ForgotPasswordLink from './ForgotPasswordLink';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';
import { FormProvider } from 'react-hook-form';
import { useLoginForm } from './useLoginForm';

export default function LoginForm() {
  const { methods, onSubmit } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
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

        <ForgotPasswordLink />
        <ButtonForm>Entrar</ButtonForm>
      </Form>
    </FormProvider>
  );
}
