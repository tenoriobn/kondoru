import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { StyledFormBody, StyledFormFooter, StyledForm } from 'src/styles/StyledAuthFormLayout';
import FormHeader from '../FormHeader';
import Button from 'src/components/Button';
import { StyledParagraph } from 'src/styles/commonStyles';
import LoginInputs from './LoginInputs';

export default function LoginForm() {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);

  return (
    <StyledForm>
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
