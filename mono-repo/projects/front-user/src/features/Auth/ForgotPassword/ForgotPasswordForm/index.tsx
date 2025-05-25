import EmailIcon from 'public/icons/email.svg';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';
import { useForgotPasswordForm } from './useForgotPasswordForm';
import InputFieldGroup from '../../AuthLayout/Form/InputFieldGroup';
import { ShowForgotPasswordFormState } from './forgotPasswordForm.type';

export default function ForgotPasswordForm({ setShowForgotPasswordForm }: ShowForgotPasswordFormState) {
  const { methods, onSubmit } = useForgotPasswordForm({ setShowForgotPasswordForm });
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
      </InputFieldGroup>
      <ButtonForm>Recuperar Senha</ButtonForm>
    </Form>
  );
}
