import styled from 'styled-components';
import { AuthLayoutProps } from './authLayout.type';

const Styled = {
  Main: styled.main`
    display: grid;
    padding: 2rem;
    gap: 2rem;

    @media (min-width: 992px) {
      grid-template-columns: minmax(0, 556px) 1fr;
    }
  `,
};


export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Styled.Main>
      {children}
    </Styled.Main>
  );
}