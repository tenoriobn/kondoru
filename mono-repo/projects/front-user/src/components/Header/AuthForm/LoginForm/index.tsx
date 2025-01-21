import { useState } from 'react';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import Button from 'src/components/Button';
import InputBox from 'src/components/InputBox';
import { StyledParagraph, StyledSubtitle, StyledTitle } from 'src/styles/commonStyles';
import { 
  StyledCloseIcon, StyledInput, 
  StyledFormBody, StyledFormFooter, 
  StyledForm, StyledFormHeader, 
} from '../StyledAuthFormLayout';

export default function LoginForm() {
  const [auth, setAuth] = useState({ email: '', password: ''});

  return (
    <StyledForm>
      <StyledFormHeader>
        <StyledCloseIcon />

        <div>
          <StyledTitle>KondoRu</StyledTitle>
          <StyledSubtitle>Olá! Acesse sua conta.</StyledSubtitle>
        </div>
      </StyledFormHeader>

      <StyledFormBody>
        <InputBox icon={<EmailIcon />}>
          <StyledInput
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            minLength={6}
            maxLength={260}
            value={auth.email}
            onChange={(e) => setAuth({...auth, email: e.target.value})}
          />
        </InputBox>

        <InputBox icon={<SecurityIcon />}>
          <StyledInput
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            maxLength={260}
            value={auth.password}
            onChange={(e) => setAuth({...auth, password: e.target.value})}
          />
          <ViewIcon />
        </InputBox>

        <Button
          $fontSize="1.25rem"
          $textDecoration="underline"
          $color="gray-400"
          $hoverColor="white"
        >
          Esqueceu a senha?
        </Button>
      </StyledFormBody>

      <StyledFormFooter>
        <Button
          $backgroundColor="gray-400"
          $color="dark-slate-700"
          $padding=".875rem 2rem"
          $borderRadius="rounded-48"
          $maxWidth="166px"
          $width="100%"
          $hoverBackgroundColor="white"
        >
          Entrar
        </Button>

        <div>
          <StyledParagraph>Ainda não tem conta?</StyledParagraph>
          <Button
            $fontSize="1.25rem"
            $textDecoration="underline"
            $color="gray-400"
            $hoverColor="white"
          >
            Cadastre-se
          </Button>
        </div>
      </StyledFormFooter>
    </StyledForm>
  );
}
