import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { StyledButton } from 'src/components/Button';
import InputErrorMessage from 'src/components/Inputs/InputErrorMessage';
import { useNewsletterForm } from './useNewsletterForm';
import { SetShowNewsletterFormProps } from '../footer.type';

const Styled = {
  Form: styled.form`
    display: grid;
    gap: .5rem;
    width: 100%;
  `,
  
  Label: styled.label<{ $errorMessage: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: text;
    border: .125rem solid
    ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
    width: 100%;
    height: 64px;
    padding: .5rem .5rem .5rem 2rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg path {
      transition: ${({ theme }) => theme.transitions.smoothTransition} ;
      stroke: ${({ theme }) => theme.colors['gray-400']};
    }

    &:has(input:focus),
    &:has(input:not(:placeholder-shown)) {
      border-color: 
      ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};

      svg path {
        stroke: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      }
    }
  `,

  Input: styled.input<{ $errorMessage: boolean }>`
    all: unset;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    height: 64px;

    &:not(:placeholder-shown) + .labelline,
    &:focus + .labelline, &:-webkit-autofill ~ .labelline {
      background-color: ${({ theme }) => theme.colors['dark-slate-800']};
      color: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      transform: translate(0px, -36px);
      z-index: 6;
      transition: ${({ theme }) => theme.transitions.smoothTransition} ;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      caret-color: ${({ theme }) => theme.colors.white} !important;
      transition: background-color 5000s ease-in-out 0s;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  LabelLine: styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: .5rem;
    cursor: text;

    color: ${({ theme }) => theme.colors['gray-400']};
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    left: 16px;
    z-index: 9;
    padding: .375rem .5rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition} ;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      left: 24px;
    }
  `
};

export default function NewsletterForm({ setShowNewsletterForm }: SetShowNewsletterFormProps) {
  const { onSubmit, register, handleSubmit, errors } = useNewsletterForm({setShowNewsletterForm});

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Label htmlFor='email' $errorMessage={!!errors.email}>
        <Styled.Input
          id='email'
          type='email'
          placeholder=""
          {...register('email')}
          $errorMessage={!!errors.email}
        />

        <Styled.LabelLine className="labelline">
          <EmailIcon />
          E-mail
        </Styled.LabelLine>

        <StyledButton
          $backgroundColor="gray-400"
          $color="dark-slate-700"
          $borderRadius="rounded-48"
          $padding="8px"
          $height="100%"
          $hoverBackgroundColor="white"
          $activeBackgroundColor="white"
          $width="100%"
          $maxWidth='134px'
          $fontSize='1.25rem'
          type="submit"
        >
          Assinar
        </StyledButton>
      </Styled.Label>

      {errors.email && <InputErrorMessage>{errors.email.message as string}</InputErrorMessage>}
    </Styled.Form>
  );
}
