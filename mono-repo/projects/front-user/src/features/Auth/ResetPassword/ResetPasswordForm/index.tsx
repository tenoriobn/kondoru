import LockIcon from 'public/icons/lock.svg';
import Form from 'components/Form';
import { usePasswordResetForm } from './useResetPasswordForm';
import { ResetPasswordFormProps } from './ResetPasswordForm.type';
import { InputGroup, InputPassword } from 'src/components/Inputs';
import { AuthButton } from 'src/styles';

export default function PasswordResetForm({ passwordResetToken, setShowPasswordResetForm }: ResetPasswordFormProps) {
  const { methods, onSubmit } = usePasswordResetForm({ passwordResetToken, setShowPasswordResetForm });
  const formErrorMessage = methods.formState.errors.root?.message;

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

      <AuthButton>Redefinir Senha</AuthButton>
    </Form>
  );
}
