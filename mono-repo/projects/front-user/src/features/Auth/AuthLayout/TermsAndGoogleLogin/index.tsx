import styled from 'styled-components';
import GoogleIcon from 'public/icons/google.svg';

const Styled = {
  TermsAndGoogleLogin: styled.div`
    display: grid;
    gap: 2rem;
  `,

  Terms: styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    
    span {
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;

      transition: ${({ theme }) => theme.transitions.smoothTransition};

      &:hover {
        color: ${({ theme }) => theme.colors['white-80']};
      }

      &:active {
        color: ${({ theme }) => theme.colors['white']};
      }
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  GoogleLogin: styled.button`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    
    background: ${({ theme }) => theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};

    color: ${({ theme }) => theme.colors['dark-slate-800']};
    font-size: 1rem;
    font-weight: 600;

    padding: 1rem 1.5rem;

    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &:hover {
      background-color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors['white']};
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
      padding: 1rem 2rem;
    }
  `,
};

export default function TermsAndGoogleLogin() {
  return (
    <Styled.TermsAndGoogleLogin>
      <Styled.Terms>
        Ao continuar, você aceita os <span>Termos de uso</span> e <span>Política de privacidade</span>, acorda em receber comunicações da <span>Kondoru</span>, afirma ter mais de 18 anos e permite o compartilhamento de seus dados nas interações com a plataforma.
      </Styled.Terms>

      <Styled.GoogleLogin>
        <GoogleIcon />
        Entrar com Google
      </Styled.GoogleLogin>
    </Styled.TermsAndGoogleLogin>
  );
}
