import InputBox from 'src/components/InputBox';
import { StyledContainerInput, StyledInput } from 'src/styles/components/StyledForm';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ErrorMessage from 'src/components/ErrorMessage';
import { ILoginInputsProps } from 'src/interfaces/api/auth/ILogin';
import { useState } from 'react';
import PasswordVisibilityToggle from 'src/components/PasswordVisibilityToggle';

export default function LoginInputs({ register, errors, errorMessage }: ILoginInputsProps) {  
  const [ passwordView, setPasswordView ] = useState(false);

  return (
    <>
      <StyledContainerInput>
        <InputBox icon={<EmailIcon />} hasError={!!errors.email}>
          <StyledInput
            type="email"
            placeholder="E-mail"
            { ...register('email')}
          />
        </InputBox>

        {errors.email && <ErrorMessage>{errors.email.message || ''}</ErrorMessage>}        
      </StyledContainerInput>

      <StyledContainerInput>
        <InputBox 
          icon={<SecurityIcon />} 
          hasError={!!errors.password}
        >
          <StyledInput
            type={passwordView ? 'text' : 'password'}
            placeholder="Senha"
            { ...register('password')}
          />

          <PasswordVisibilityToggle  
            passwordView={passwordView}
            setPasswordView={setPasswordView}
          />
        </InputBox>

        {errors.password && <ErrorMessage>{errors.password.message || ''}</ErrorMessage>}
      </StyledContainerInput>

      {!errors.email && !errors.password && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}
