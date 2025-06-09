import Form from 'components/Form';
import LockIcon from 'public/icons/lock.svg';
import { usePasswordResetForm } from './useResetPasswordForm';
import { ResetPasswordFormProps } from './ResetPasswordForm.type';
import { InputGroup, InputPassword } from 'src/components/Inputs';
import { AnimatedDots, AuthButton } from 'src/styles';

export default function PasswordResetForm({ passwordResetToken, setShowPasswordResetForm }: ResetPasswordFormProps) {
  const { methods, onSubmit } = usePasswordResetForm({ passwordResetToken, setShowPasswordResetForm });
  const formErrorMessage = methods.formState.errors.root?.message;
  const isSubmitting = methods.formState.isSubmitting;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputGroup formErrorMessage={formErrorMessage}>      
        <InputPassword
          id="password" 
          label="Senha" 
          icon={<LockIcon />} 
        />
        
        <InputPassword
          id="passwordConfirmation" 
          label="Confirmar Senha" 
          icon={<LockIcon />} 
        />
      </InputGroup>

      <AuthButton disabled={isSubmitting}>
        {isSubmitting ? <>Redefinindo Senha<AnimatedDots /></> : 'Redefinir Senha'}
      </AuthButton>
    </Form>
  );
}
