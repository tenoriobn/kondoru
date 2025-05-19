import LockIcon from 'public/icons/lock.svg';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';
import { useResetPasswordForm } from './useResetPasswordForm';
import InputFieldGroup from '../../AuthLayout/Form/InputFieldGroup';

export default function ResetPasswordForm() {
  const { methods, onSubmit } = useResetPasswordForm();
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputFieldGroup formErrorMessage={formErrorMessage}>      
        <InputField 
          id="password" 
          type="password" 
          label="Senha" 
          icon={<LockIcon />} 
        />
        
        <InputField 
          id="passwordConfirmation" 
          type="password" 
          label="Confirmar Senha" 
          icon={<LockIcon />} 
        />
      </InputFieldGroup>

      <ButtonForm>Redefinir Senha</ButtonForm>
    </Form>
  );
}
