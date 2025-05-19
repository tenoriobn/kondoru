import styled from 'styled-components';
import { AuthLayoutProps } from './authLayout.type';
import AuthHeader from './AuthHeader';

const Styled = {
  Main: styled.main`
    background-image: url('/images/background-header.webp');
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 1rem;

    @media (min-width: 375px) {
      padding: 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 4rem;
    }
  `,

  Container: styled.div`
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-24']};
    border: .0625rem solid rgba(189, 189, 189, 0.160);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width: 700px;
    padding: 1rem;
    width: 100%;

    @media (min-width: 375px) {
      padding: 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 2rem;
    }
  `,

  Section: styled.section`
    display: grid;
    gap: 3rem;
    width: 100%;
  `,
};


export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Styled.Main>
      <Styled.Container>
        <AuthHeader />

        <Styled.Section>
          {children}
        </Styled.Section>
      </Styled.Container>
    </Styled.Main>
  );
}