import styled from 'styled-components';
import GoogleIcon from 'public/icons/google.svg';
import { AuthButton, ErrorMessage } from 'src/styles';
import { useGoogleAuth } from './useGoogleAuth';

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

  GoogleLoginContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
  `,

  GoogleLogin: styled(AuthButton)`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    align-items: center;
    gap: .5rem;
    max-width: 100%!important;
  `,

  ErrorMessage: styled(ErrorMessage)`
    text-align: center;
  `,
};

export default function TermsAndGoogleLogin() {
  const { loginWithGoogle, googleAuthError} = useGoogleAuth();

  return (
    <Styled.TermsAndGoogleLogin>
      <Styled.Terms>
        Ao continuar, você aceita os <span>Termos de uso</span> e <span>Política de privacidade</span>, acorda em receber comunicações da <span>Kondoru</span>, afirma ter mais de 18 anos e permite o compartilhamento de seus dados nas interações com a plataforma.
      </Styled.Terms>

      <Styled.GoogleLoginContainer>
        <Styled.GoogleLogin onClick={() => loginWithGoogle()}>
          <GoogleIcon />
          Entrar com Google
        </Styled.GoogleLogin>

        {googleAuthError && <Styled.ErrorMessage>{googleAuthError}</Styled.ErrorMessage>}
      </Styled.GoogleLoginContainer>
    </Styled.TermsAndGoogleLogin>
  );
}
