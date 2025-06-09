import EmailIcon from 'public/icons/email.svg';
import Form from 'components/Form';
import { useForgotPasswordForm } from './useForgotPasswordForm';
import { ShowForgotPasswordFormState } from './forgotPasswordForm.type';
import { InputGroup, InputField } from 'src/components/Inputs';
import { AnimatedDots, AuthButton } from 'src/styles';

export default function ForgotPasswordForm({ setShowForgotPasswordForm }: ShowForgotPasswordFormState) {
  const { methods, onSubmit } = useForgotPasswordForm({ setShowForgotPasswordForm });
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
      </InputGroup>
      
      <AuthButton disabled={isSubmitting}>
        {isSubmitting ? <>Recuperando Senha<AnimatedDots /></> : 'Recuperar Senha'}
      </AuthButton>
    </Form>
  );
}
