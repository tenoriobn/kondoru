import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';
import { useRegisterForm } from './useRegisterForm';
import InputFieldGroup from '../../AuthLayout/Form/InputFieldGroup';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import CalendarIcon from 'public/icons/calendar.svg';
import PhoneIcon from 'public/icons/phone.svg';
import LockIcon from 'public/icons/lock.svg';
import { RegisterFormStateProps } from './register.type';

export default function RegisterForm({ setShowRegisterForm }: RegisterFormStateProps) {
  const { methods, onSubmit } = useRegisterForm({ setShowRegisterForm });
  const formErrorMessage = methods.formState.errors.root?.message;

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <InputFieldGroup formErrorMessage={formErrorMessage}>      
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

        <InputField 
          maxWidth="232px"
          id="dateOfBirth" 
          type="date" 
          label="Data de Nasc." 
          icon={<CalendarIcon />} 
        />

        {/* <InputFieldDateWrapper>

        </InputFieldDateWrapper> */}

        <InputField 
          id="phone" 
          type="tel" 
          label="Telefone" 
          icon={<PhoneIcon />}  
        />

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

      <ButtonForm>Criar conta</ButtonForm>
    </Form>
  );
}
