import React, { useState } from 'react';
import InputBox from 'src/components/InputBox';
import { StyledContainerInput, StyledInput } from 'src/styles/components/StyledForm';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import { IRegistrationInputsProps } from 'src/interfaces/api/auth/IRegister';
import ErrorMessage from 'src/components/ErrorMessage';
import PasswordVisibilityToggle from 'src/components/PasswordVisibilityToggle';

export default function RegistrationInputs({ register, errors }: IRegistrationInputsProps) {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

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
            type={passwordView ? 'text' : 'password'}
            placeholder="Senha"
            {...register('password')}
          />

          <PasswordVisibilityToggle  
            passwordView={passwordView}
            setPasswordView={setPasswordView}
          />
        </InputBox>
        {errors.password && <ErrorMessage>{errors.password.message || ''}</ErrorMessage>}
      </StyledContainerInput>

      <StyledContainerInput>
        <InputBox icon={<SecurityIcon />} hasError={!!errors.passwordConfirmation}>
          <StyledInput
            type={confirmPasswordView ? 'text' : 'password'}
            placeholder="Confirmar senha"
            {...register('passwordConfirmation')}
          />

          <PasswordVisibilityToggle  
            passwordView={confirmPasswordView}
            setPasswordView={setConfirmPasswordView}
          />
        </InputBox>
        {errors.passwordConfirmation && <ErrorMessage>{errors.passwordConfirmation.message || ''}</ErrorMessage>}
      </StyledContainerInput>
    </>
  );
}
