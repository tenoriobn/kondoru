import AuthHeader from 'src/features/Auth/AuthLayout/LeftSide/AuthHeader';
import styled from 'styled-components';
import { LeftSideProps } from './leftSide.type';

const Styled = {
  LeftSide: styled.div`
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-24']};
    padding: 2rem;

    display: grid;
    grid-template-rows: auto 1fr;
    gap: 4rem;
  `,

  Section: styled.section`
    align-content: center;

    display: grid;
    gap: 2.5rem;
  `,
};

export default function LeftSide({ children }: LeftSideProps) {
  return (
    <Styled.LeftSide>
      <AuthHeader />

      <Styled.Section>
        {children}
      </Styled.Section>
    </Styled.LeftSide>
  );
}
