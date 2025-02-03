import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { StyledFormBody, StyledFormFooter, StyledForm } from 'src/styles/components/StyledForm';
import FormHeader from '../FormHeader';
import Button from 'src/components/Button';
import LoginInputs from './LoginInputs';
import { useClickOutside } from 'src/hooks/utils/useClickOutside';
import { useRef } from 'react';
import { StyledParagraph } from 'src/styles/components/StyledText';

export default function LoginForm() {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);
  const formRef = useRef<HTMLFormElement>(null);
  useClickOutside(formRef, () => setActiveAuthForm(''));

  return (
    <StyledForm 
      ref={formRef}
    >
      <FormHeader 
        title='KondoRu'
        subtitle='Olá! Acesse sua conta.'
      />

      <StyledFormBody>
        <LoginInputs />

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
            onClick={() => setActiveAuthForm('register')}
          >
            Cadastre-se
          </Button>
        </div>
      </StyledFormFooter>
    </StyledForm>
  );
}
