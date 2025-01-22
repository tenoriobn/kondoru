import { useSetRecoilState } from 'recoil';
import FormHeader from '../FormHeader';
import RegistrationInputs from './RegistrationInputs';
import RegistrationTerm from './RegistrationTerm';
import Button from 'src/components/Button';
import { StyledFormBody, StyledFormFooter, StyledForm } from 'src/styles/StyledAuthFormLayout';
import { stateActiveAuthForm } from 'src/store/atom';
import { useRef } from 'react';
import { useClickOutside } from 'src/hooks/utils/useClickOutside';

export default function RegistrationForm() {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);
  const formRef = useRef<HTMLFormElement>(null);
  useClickOutside(formRef, () => setActiveAuthForm(''));

  return (
    <StyledForm
      ref={formRef}
    >
      <FormHeader 
        title='KondoRu'
        subtitle='Junte-se à comunidade'
      />

      <StyledFormBody>
        <RegistrationInputs />
        <RegistrationTerm />
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
          Cadastrar
        </Button>
      </StyledFormFooter>
    </StyledForm>
  );
}
