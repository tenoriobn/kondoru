import FormHeader from '../FormHeader';
import RegistrationInputs from './RegistrationInputs';
import RegistrationTerm from './RegistrationTerm';
import Button from 'src/components/Button';
import { StyledFormBody, StyledFormFooter, StyledForm } from 'src/styles/StyledAuthFormLayout';

export default function RegistrationForm() {
  return (
    <StyledForm>
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
