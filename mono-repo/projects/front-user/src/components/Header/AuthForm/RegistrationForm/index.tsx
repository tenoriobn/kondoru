import { useSetRecoilState } from 'recoil';
import FormHeader from '../FormHeader';
import RegistrationInputs from './RegistrationInputs';
import RegistrationTerm from './RegistrationTerm';
import Button from 'src/components/Button';
import { StyledFormBody, StyledFormFooter, StyledForm } from 'src/styles/components/StyledForm';
import { stateActiveAuthForm } from 'src/store/atom';
import { useRef, useState } from 'react';
import { useClickOutside } from 'src/hooks/utils/useClickOutside';
import useRegister from 'src/hooks/api/auth/useRegister';

export default function RegistrationForm() {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);
  const formRef = useRef<HTMLFormElement>(null);
  useClickOutside(formRef, () => setActiveAuthForm(''));

  const { register, handleSubmit, errors, onSubmit } = useRegister();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledForm
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormHeader 
        title='KondoRu'
        subtitle='Junte-se à comunidade'
      />

      <StyledFormBody>
        <RegistrationInputs register={register} errors={errors} />
        <RegistrationTerm setIsChecked={setIsChecked} />
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
          $disabled={!isChecked}
        >
          Cadastrar
        </Button>
      </StyledFormFooter>
    </StyledForm>
  );
}
