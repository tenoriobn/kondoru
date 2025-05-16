import styled from 'styled-components';
import GoogleIcon from 'public/icons/google.svg';

const Styled = {
  TermsAndGoogleLogin: styled.div`
    display: grid;
    gap: 1.5rem;
  `,

  Terms: styled.p`
    font-size: 1.25rem;
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
  `,

  GoogleLogin: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};

    color: ${({ theme }) => theme.colors['dark-slate-800']};
    font-size: 1.25rem;
    font-weight: 600;

    padding: 1rem 2rem;

    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &:hover {
      background-color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function TermsAndGoogleLogin() {
  return (
    <Styled.TermsAndGoogleLogin>
      <Styled.Terms>
        Ao continuar, você aceita os <span>Termos de uso</span> e <span>Política de privacidade</span>, acorda em receber comunicações da Kondoru, afirma ter mais de 18 anos e permite o compartilhamento de seus dados nas interações com a plataforma.
      </Styled.Terms>

      <Styled.GoogleLogin>
        <GoogleIcon />
        Entrar com Google
      </Styled.GoogleLogin>
    </Styled.TermsAndGoogleLogin>
  );
}
