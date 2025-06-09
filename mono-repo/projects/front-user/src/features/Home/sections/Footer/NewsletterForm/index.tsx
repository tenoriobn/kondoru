import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { useNewsletterForm } from './useNewsletterForm';
import { SetShowNewsletterFormProps } from '../footer.type';
import { FormButton, Input, InputErrorMessage, Label, LabelLine } from 'src/styles';

const Styled = {
  Form: styled.form`
    display: grid;
    gap: .5rem;
    width: 100%;
  `,
  
  InputLabelWrapper: styled(Label)`
    padding: .5rem .5rem .5rem 2rem!important;
  `,

  Button: styled(FormButton)`
    max-width: 112px;

    @media (min-width: 768px) {
      max-width: 134px;
    }
  `,
};

export default function NewsletterForm({ setShowNewsletterForm }: SetShowNewsletterFormProps) {
  const { onSubmit, register, handleSubmit, errors } = useNewsletterForm({setShowNewsletterForm});

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.InputLabelWrapper htmlFor='email' $errorMessage={!!errors.email}>
        <Input
          id='email'
          type='email'
          placeholder=""
          {...register('email')}
          $errorMessage={!!errors.email}
        />

        <LabelLine className="labelline">
          <EmailIcon />
          E-mail
        </LabelLine>

        <Styled.Button>Assinar</Styled.Button>
      </Styled.InputLabelWrapper>

      {errors.email && <InputErrorMessage>{errors.email.message as string}</InputErrorMessage>}
    </Styled.Form>
  );
}
