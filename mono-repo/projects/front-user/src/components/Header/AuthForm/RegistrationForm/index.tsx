import { useState } from 'react';
import styled from 'styled-components';
import Button from 'src/components/Button';
import InputBox from 'src/components/InputBox';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import { StyledParagraph, StyledCheckbox, StyledSubtitle, StyledTitle } from 'src/styles/commonStyles';
import { 
  StyledCloseIcon, StyledInput, StyledFormBody, StyledFormFooter, StyledForm, StyledFormHeader, 
} from '../StyledAuthFormLayout';

const StyledTermContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  user-select: none;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export default function RegistrationForm() {
  const [auth, setAuth] = useState({ name: '', email: '', password: '', confirmPassword: ''});

  return (
    <StyledForm>
      <StyledFormHeader>
        <StyledCloseIcon />

        <div>
          <StyledTitle>KondoRu</StyledTitle>
          <StyledSubtitle>Junte-se à comunidade</StyledSubtitle>
        </div>
      </StyledFormHeader>

      <StyledFormBody>
        <InputBox icon={<UserIcon />}>
          <StyledInput
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
            minLength={6}
            maxLength={260}
            value={auth.name}
            onChange={(e) => setAuth({...auth, name: e.target.value})}
          />
        </InputBox>

        <InputBox icon={<EmailIcon />}>
          <StyledInput
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            minLength={6}
            maxLength={260}
            value={auth.email}
            onChange={(e) => setAuth({...auth, email: e.target.value})}
          />
        </InputBox>

        <InputBox icon={<SecurityIcon />}>
          <StyledInput
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            maxLength={260}
            value={auth.password}
            onChange={(e) => setAuth({...auth, password: e.target.value})}
          />

          <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
        </InputBox>

        <InputBox icon={<SecurityIcon />}>
          <StyledInput
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirmar senha"
            minLength={8}
            maxLength={260}
            value={auth.confirmPassword}
            onChange={(e) => setAuth({...auth, confirmPassword: e.target.value})}
          />
          <ViewIcon style={{ cursor: 'pointer', zIndex: 10}} />
        </InputBox>

        <StyledTermContainer>
          <StyledParagraph>
            Estes dados serão utilizados apenas para facilitar os seus 
            agendamentos de visitas, suas reservas em um imóvel e para 
            entrarmos em contato com você. Rápido e fácil. Do seu jeito!
          </StyledParagraph>

          <StyledLabel htmlFor="confirm-term">
            <StyledCheckbox type="checkbox" name="confirm-term" id="confirm-term" />
            Li e aceito os Termos de Uso e Políticas de Privacidade
          </StyledLabel>
        </StyledTermContainer>
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
