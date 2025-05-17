import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import InputBox from 'src/components/InputBox';
import { StyledButton } from 'src/components/Button';

const StyledInput = styled.input<{ $hasError?: boolean }>`
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
`;

const StyledFooterButton = styled(StyledButton)`
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function NewsletterForm() {
  return (
    <form action="">
      <InputBox $padding='.5rem .5rem .5rem 2rem' icon={<EmailIcon />}>
        <StyledInput
          type="email"
          name="email"
          id="email-newsletter"
          placeholder="E-mail"
          minLength={6}
          maxLength={260}
          required
        />

        <StyledFooterButton
          $backgroundColor="gray-400"
          $color="dark-slate-700"
          $borderRadius="rounded-48"
          $padding="8px"
          $height="100%"
          $hoverBackgroundColor="white"
          $activeBackgroundColor="white"
          $width="100%"
        >
          Assinar
        </StyledFooterButton>
      </InputBox>
    </form>
  );
}
