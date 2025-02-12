import React from 'react';
import InputBox from 'src/components/InputBox';
import { StyledContainerInput, StyledInput } from 'src/styles/components/StyledForm';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import { IRegistrationInputsProps } from 'src/interfaces/api/auth/IRegister';
import ErrorMessage from 'src/components/Message';

export default function RegistrationInputs({ register, errors }: IRegistrationInputsProps) {
  return (
    <>
      <StyledContainerInput>
        <InputBox icon={<UserIcon />} hasError={!!errors.name}>
          <StyledInput
            type="text"
            placeholder="Nome completo"
            
            {...register('name')}
          />
        </InputBox>
        {errors.name && <ErrorMessage>{errors.name.message || ''}</ErrorMessage>}
      </StyledContainerInput>

      <StyledContainerInput>
        <InputBox icon={<EmailIcon />} hasError={!!errors.email}>
          <StyledInput
            type="email"
            placeholder="E-mail"
            {...register('email')}
          />
        </InputBox>
        {errors.email && <ErrorMessage>{errors.email.message || ''}</ErrorMessage>}
      </StyledContainerInput>

      <StyledContainerInput>
        <InputBox icon={<SecurityIcon />} hasError={!!errors.password}>
          <StyledInput
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
        </InputBox>
        {errors.password && <ErrorMessage>{errors.password.message || ''}</ErrorMessage>}
      </StyledContainerInput>

      <StyledContainerInput>
        <InputBox icon={<SecurityIcon />} hasError={!!errors.passwordConfirmation}>
          <StyledInput
            type="password"
            placeholder="Confirmar senha"
            {...register('passwordConfirmation')}
          />
          <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
        </InputBox>
        {errors.passwordConfirmation && <ErrorMessage>{errors.passwordConfirmation.message || ''}</ErrorMessage>}
      </StyledContainerInput>
    </>
  );
}
