import Image from 'next/image';
import Link from 'next/link';
import Logo from 'src/features/Home/components/Header/Logo';
import styled from 'styled-components';
import BackIcon from 'public/icons/back.svg';
import GoogleIcon from 'public/icons/google.svg';
import EmailIcon from 'public/icons/email.svg';
import LockIcon from 'public/icons/lock.svg';
import { useRouter } from 'next/router';

const Styled = {
  Main: styled.main`
    display: grid;
    padding: 2rem;
    gap: 2rem;

    @media (min-width: 992px) {
      grid-template-columns: minmax(0, 556px) 1fr;
    }
  `,

  LeftSide: styled.div`
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-24']};
    padding: 2rem;

    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 4rem;
  `,

  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  `,

  Button: styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 500;
  `,

  Section: styled.section`
    align-content: center;

    display: grid;
    gap: 2.5rem;
  `,

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
  `,

  AuthDivider: styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 1.5rem;
    align-items: center;
  `,

  DividerLabel: styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    line-height: 20px;
  `,

  Line: styled.span`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,

  ForgotPasswordLink: styled(Link)`
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    text-decoration: underline;
  `,

  LoginButton: styled.button`   
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};

    color: ${({ theme }) => theme.colors['dark-slate-800']};
    font-size: 1.25rem;
    font-weight: 600;

    max-width: 166px;
    width: 100%;

    padding: 1rem 2rem;
    margin-top: 2rem;
  `,

  SignupPrompt: styled.p`
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    a {
      font-weight: 700;
      text-decoration: underline;
    }
  `,

  Aside: styled.aside`
    display: none;
    border-radius: ${({ theme }) => theme.borderRadius['rounded-24']};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      max-height: 888px;
      object-fit: cover;
    }

    @media (min-width: 992px) {
      display: flex;
    }
  `,
};





const FilterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  position: relative;
  height: 64px;
  width: 100%;
`;

const Input = styled.input`
  appearance: none;
  outline: none;
  position: absolute;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  border: .125rem solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  padding: 1.125rem 2rem;
  height: 64px;
  z-index: 5;

  &:not(:placeholder-shown), &:focus {
    border-color: ${({ theme }) => theme.colors.white};
  }
  
  &:not(:placeholder-shown) + .labelline, &:focus + .labelline {
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    color: ${({ theme }) => theme.colors.white};
    height: 30px;
    transform: translate(22px, -35px) ;
    z-index: 6;
    padding: 0 .5rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9;
  cursor: text;

  position: absolute;
  color: ${({ theme }) => theme.colors['gray-400']};
  font-size: 1rem;
  font-weight: 500;
  padding: 0 2rem;
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  svg {
    width: 20px;

    path {
      fill: ${({ theme }) => theme.colors['gray-400']};
    }
  }
`;

export default function LoginScreen() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Styled.Main>
      <Styled.LeftSide>
        <Styled.Header>
          <Styled.Button onClick={handleBack}>
            <BackIcon />
            <p>Voltar</p>
          </Styled.Button>

          <Logo />
        </Styled.Header>

        <Styled.Section>
          <Styled.TermsAndGoogleLogin>
            <Styled.Terms>
              Ao continuar, você aceita os <span>Termos de uso</span> e <span>Política de privacidade</span>, acorda em receber comunicações da <span>Kondoru</span>, afirma ter mais de 18 anos e permite o compartilhamento de seus dados nas interações com a plataforma.
            </Styled.Terms>

            <Styled.GoogleLogin>
              <GoogleIcon />
              Entrar com Google
            </Styled.GoogleLogin>
          </Styled.TermsAndGoogleLogin>

          <Styled.AuthDivider>
            <Styled.Line></Styled.Line>
            <Styled.DividerLabel>ou entre com seu e-mail</Styled.DividerLabel>
            <Styled.Line></Styled.Line>
          </Styled.AuthDivider>

          <Styled.Form action="">
            <FilterInputWrapper>
              <Input 
                type="email" 
                id="email" 
                required 
                placeholder=''
              />

              <Label className="labelline" htmlFor="email">
                <EmailIcon />
                E-mail
              </Label>
            </FilterInputWrapper>

            <FilterInputWrapper>
              <Input 
                type="password" 
                id="password" 
                required 
                placeholder=''
              />

              <Label className="labelline" htmlFor="password">
                <LockIcon />
                Senha
              </Label>
            </FilterInputWrapper>

            <Styled.ForgotPasswordLink href='/auth/recuperar-senha'>
              Esqueceu a senha?
            </Styled.ForgotPasswordLink>
          
            <Styled.LoginButton>Entrar</Styled.LoginButton>
          </Styled.Form>
        </Styled.Section>

        <footer>
          <Styled.SignupPrompt>
            Ainda não tem conta? <Link href="/cadastro">Cadastre-se</Link>
          </Styled.SignupPrompt>
        </footer>
      </Styled.LeftSide>

      <Styled.Aside>
        <Image src="/images/auth-img.jpg" alt='' width={0} height={0} sizes="100vw" />
      </Styled.Aside>
    </Styled.Main>
  );
}
