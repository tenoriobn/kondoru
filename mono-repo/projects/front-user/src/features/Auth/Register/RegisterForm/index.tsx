import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import ButtonForm from '../../AuthLayout/Form/ButtonForm';
import Form from '../../AuthLayout/Form';
import InputField from '../../AuthLayout/Form/InputField';
import styled from 'styled-components';

const InputFieldDateWrapper = styled.div`
  max-width: 232px;
  width: 100%;
  align-self: start;
`;

export default function RegisterForm() {
  return (
    <Form>
      <InputField id="name" type="text" label="Nome completo" icon={<EmailIcon />} required />
      <InputField id="email" type="email" label="E-mail" icon={<EmailIcon />} required />
      <InputFieldDateWrapper>
        <InputField id="date-of-birth" type="date" label="Data de Nasc." icon={<EmailIcon />} required />
      </InputFieldDateWrapper>
      <InputField id="phone" type="tel" label="Telefone" icon={<EmailIcon />} required />
      <InputField id="password" type="password" label="Senha" icon={<LockIcon />} required />
      <InputField id="confirm-password" type="password" label="Confirmar Senha" icon={<LockIcon />} required />

      <ButtonForm>Criar conta</ButtonForm>
    </Form>
  );
}
