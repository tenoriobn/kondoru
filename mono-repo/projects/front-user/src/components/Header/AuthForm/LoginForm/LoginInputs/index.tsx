import InputBox from 'src/components/InputBox';
import { StyledInput } from 'src/styles/components/StyledForm';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import ErrorMessage from 'src/components/Message';
import { ILoginInputsProps } from 'src/interfaces/api/auth/ILogin';

export default function LoginInputs({ login, setLogin, messageError }: ILoginInputsProps) {
  return (
    <>
      <InputBox icon={<EmailIcon />}>
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          minLength={6}
          maxLength={260}
          value={login.email}
          onChange={(e) => setLogin({...login, email: e.target.value})}
        />
      </InputBox>

      <InputBox icon={<SecurityIcon />}>
        <StyledInput
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          maxLength={260}
          value={login.password}
          onChange={(e) => setLogin({...login, password: e.target.value})}
        />

        <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
      </InputBox>

      <ErrorMessage>
        {messageError ?? ''}
      </ErrorMessage>
    </>
  );
}
