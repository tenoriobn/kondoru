import { useState } from 'react';
import styled from 'styled-components';
import { transition } from 'src/styles/transitions';
import CloseIcon from 'public/icons/close.svg';
import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import SecurityIcon from 'public/icons/security.svg';
import ViewIcon from 'public/icons/view.svg';
import Button from 'src/components/Button';
import InputModal from '../../InputModal';

const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 786px;
  width: 100%;
  background: ${({ theme }) => theme.colors['gradient-dark-slate']};
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  svg {
    align-self: flex-end;
    cursor: pointer;
    margin-bottom: 1rem;
    g {
      stroke: ${({ theme }) => theme.colors['gray-400']};
      ${transition}

      &:hover {
        stroke: ${({ theme }) => theme.colors['white']};
      }
    }
  }
  
  div {
    display: grid;
    gap: 1rem;

    h2 {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 3.5rem;
      letter-spacing: -3.4px;
      text-align: center;
      color: ${({ theme }) => theme.colors['gray-400']};
    }

    h3 {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 500;
      text-align: center;
      color: ${({ theme }) => theme.colors['gray-400']};
    }
  }
`;

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

const StyledModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: .375rem;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const StyledInput = styled.input`
  outline: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-size: 1.25rem;
  line-height: 1.25rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const StyledTermContainer = styled.div`
  display: grid;
  gap: 2rem;

  p, label {
    font-size: 20px;
    color: ${({ theme }) => theme.colors['gray-400']};
  }

  p {
    text-align: center;
  }

  label {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;

    input[type="checkbox"] {
      appearance: none;
      border: 2px solid ${({ theme }) => theme.colors['gray-400']};
      border-radius: .5rem;
      width: 32px;
      height: 32px;
      position: relative;
      background-color: transparent;

      &:checked::after {
        content: "✔";
        position: absolute;
        color: ${({ theme }) => theme.colors['gray-400']};
        font-size: 1.5rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default function RegistrationForm() {
  const [auth, setAuth] = useState({ name: '', email: '', password: '', confirmPassword: ''});

  return (
    <StyledModalForm>
      <StyledModalHeader>
        <CloseIcon />

        <div>
          <h2>KondoRu</h2>
          <h3>Junte-se à comunidade</h3>
        </div>
      </StyledModalHeader>

      <StyledModalBody>
        <InputModal icon={<UserIcon />}>
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
        </InputModal>

        <InputModal icon={<EmailIcon />}>
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
        </InputModal>

        <InputModal icon={<SecurityIcon />}>
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
          <ViewIcon />
        </InputModal>

        <InputModal icon={<SecurityIcon />}>
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
          <ViewIcon />
        </InputModal>

        <StyledTermContainer>
          <p>
            Estes dados serão utilizados apenas para facilitar os seus 
            agendamentos de visitas, suas reservas em um imóvel e para 
            entrarmos em contato com você. Rápido e fácil. Do seu jeito!
          </p>

          <label htmlFor="confirm-term">
            <input type="checkbox" name="confirm-term" id="confirm-term" />
            Li e aceito os Termos de Uso e Políticas de Privacidade
          </label>
        </StyledTermContainer>
      </StyledModalBody>

      <StyledModalFooter>
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
      </StyledModalFooter>
    </StyledModalForm>
  );
}
