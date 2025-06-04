import Form from 'components/Form';
import { useRegisterForm } from './useRegisterForm';
import { RegisterFormStateProps } from './register.type';
import { InputDate, InputGroup, InputPassword, InputField } from 'src/components/Inputs';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import CalendarIcon from 'public/icons/calendar.svg';
import PhoneIcon from 'public/icons/phone.svg';
import LockIcon from 'public/icons/lock.svg';
import { StyledAuthFormButton } from 'src/styles/ui/StyledButton';

export default function RegisterForm({ setShowRegisterForm }: RegisterFormStateProps) {
  const { methods, onSubmit } = useRegisterForm({ setShowRegisterForm });
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputGroup formErrorMessage={formErrorMessage}>      
        <InputField 
          id="name" 
          type="text" 
          label="Nome completo" 
          icon={<UserIcon />} 
        />

        <InputField 
          id="email" 
          type="email" 
          label="E-mail" 
          icon={<EmailIcon />} 
        />

        <InputDate
          id="dateOfBirth" 
          label="Data de Nasc." 
          icon={<CalendarIcon />} 
        />

        <InputField
          id="phone" 
          type="tel" 
          label="Telefone" 
          icon={<PhoneIcon />}  
        />

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

      <StyledAuthFormButton>Criar conta</StyledAuthFormButton>
    </Form>
  );
}
