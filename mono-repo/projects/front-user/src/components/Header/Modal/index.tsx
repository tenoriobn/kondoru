import Button from "src/components/Button";
import { Container } from "src/styles/container";
import { transition } from "src/styles/transitions";
import styled from "styled-components"
import CloseIcon from "public/icons/close.svg"

const StyledModal = styled.section`
  background-color: ${({ theme }) => theme.colors['black-82']};
  backdrop-filter: blur(12px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const StyledModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    max-width: 768px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors['dark-slate-900']};
    border-radius: 1.5rem;
    padding: 2rem 1.5rem;

    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
  }
`;

const StyledHeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  svg {
    align-self: end;
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

  h2, h3 {
    color: ${({ theme }) => theme.colors['gray-400']};
    text-align: center;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 3.5rem;
    letter-spacing: -3.4px;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 500;
  }
`;

const StyledMainModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  input {
    outline: none;
    background: none;
    border: 2px solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
    color: ${({ theme }) => theme.colors['white']};
    font-size: 1.25rem;
    line-height: 1.25rem;
    
    height: 64px;

    padding: .5rem 2rem;

    ${transition}

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-400']};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors['white']};
    }
  }

  button {
    margin-top: .5rem;
  }
`;

const StyledFooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['gray-400']};
    text-align: center;
    margin-top: 2rem;
  }
`;

export default function Modal() {
  return (
    <StyledModal>
      <StyledModalContainer>
        <form action="">
          <StyledHeaderModal>
            <CloseIcon />

            <h2>KondoRu</h2>
            <h3>Olá! Acesse sua conta.</h3>
          </StyledHeaderModal>

          <StyledMainModal>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="password" id="password" placeholder="Senha" />

            <Button
              $fontSize="1.25rem"
              $textDecoration="underline"
              $color="gray-400"
              $hoverColor="white"
            >
              Esqueceu a senha?
            </Button>
          </StyledMainModal>

          <StyledFooterModal>
            <Button
              $backgroundColor="gray-400"
              $color="dark-slate-700"
              $padding=".875rem 2rem"
              $borderRadius="rounded-48"
              $maxWidth="166px"
              $width="100%"
              $hoverBackgroundColor="white"
            >
              Entrar
            </Button>

            <p>Ainda não tem conta?</p>

            <Button
              $fontSize="1.25rem"
              $textDecoration="underline"
              $color="gray-400"
              $hoverColor="white"
            >
              Cadastre-se
            </Button>
          </StyledFooterModal>
        </form>
      </StyledModalContainer>
    </StyledModal>
  )
}
