import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import InputBox from 'src/components/InputBox';
import { StyledButton } from 'src/components/Button';
import { StyledInput } from 'src/styles/styledComponents/StyledForm';

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
          id="email"
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
