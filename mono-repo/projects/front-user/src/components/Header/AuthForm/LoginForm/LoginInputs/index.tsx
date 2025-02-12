import InputBox from 'src/components/InputBox';
import { StyledContainerInput, StyledInput } from 'src/styles/components/StyledForm';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import ErrorMessage from 'src/components/Message';
import { ILoginInputsProps } from 'src/interfaces/api/auth/ILogin';

export default function LoginInputs({ register, errors }: ILoginInputsProps) {  
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
        <InputBox icon={<SecurityIcon />} hasError={!!errors.password}>
          <StyledInput
            type='password'
            placeholder="Senha"
            { ...register('password')}
          />

          <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
        </InputBox>

        {errors.password && <ErrorMessage>{errors.password.message || ''}</ErrorMessage>}
      </StyledContainerInput>
    </>
  );
}
