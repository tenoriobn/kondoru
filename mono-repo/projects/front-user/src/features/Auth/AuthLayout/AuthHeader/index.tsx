import styled from 'styled-components';
import Logo from 'components/Logo';
import ArrowLeftIcon from 'public/icons/arrow-left.svg';
import { useRouter } from 'next/router';

const Styled = {
  AuthHeader: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  `,

  Button: styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 500;

    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg path {
      transition: ${({ theme }) => theme.transitions.smoothTransition};
    }

    &:hover {
      --color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      --color: ${({ theme }) => theme.colors.white};
    }

    &:hover, &:active {
      color: var(--color);

      svg path {
        stroke: var(--color);
      }
    }
  `,
};

export default function AuthHeader() {
  const router = useRouter();

  return (
    <Styled.AuthHeader>
      <Styled.Button onClick={() => router.back()}>
        <ArrowLeftIcon />
        Voltar
      </Styled.Button>

      <Logo />
    </Styled.AuthHeader>
  );
}
