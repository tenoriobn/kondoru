import styled from 'styled-components';
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

const InputFieldDateWrapper = styled.div`
  max-width: 232px;
  width: 100%;
  align-self: start;

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export default function RegisterForm() {
  const { methods, onSubmit } = useRegisterForm();
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

        <InputFieldDateWrapper>
          <InputField 
            id="dateOfBirth" 
            type="date" 
            label="Data de Nasc." 
            icon={<CalendarIcon />} 
          />
        </InputFieldDateWrapper>

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
