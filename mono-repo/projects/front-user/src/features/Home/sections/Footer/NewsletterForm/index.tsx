import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { StyledButton } from 'src/components/Button';

const Styled = {
  Label: styled.label`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: 2px solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
    cursor: text;
    width: 100%;
    height: 64px;
    padding: .5rem .5rem .5rem 2rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg {
      flex-shrink: 0;

      path {
        stroke: ${({ theme }) => theme.colors['gray-400']};
        transition: ${({ theme }) => theme.transitions.smoothTransition};
      }
    }

    &:has(input:focus), 
    &:has(input:not(:placeholder-shown)) {
      border-color: ${({ theme }) => theme.colors['white']};

      svg path {
        stroke: ${({ theme }) => theme.colors['white']};
      }
    }
  `,

  Input: styled.input<{ $hasError?: boolean }>`
    outline: none;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['white']};
    font-size: 1.25rem;
    width: 100%;
    
    &:-webkit-autofill { 
      -webkit-background-clip: text;
      -webkit-text-fill-color: white !important;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-400']};
    }
  `,
};

export default function NewsletterForm() {
  return (
    <form action="">
      <Styled.Label>
        <EmailIcon />

        <Styled.Input
          type="email"
          name="email"
          id="email-newsletter"
          placeholder="E-mail"
          minLength={6}
          maxLength={260}
          required
        />

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
        >
          Assinar
        </StyledButton>
      </Styled.Label>
    </form>
  );
}
