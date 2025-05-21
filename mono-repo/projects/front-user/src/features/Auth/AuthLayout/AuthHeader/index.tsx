import styled from 'styled-components';
import Logo from 'src/features/Home/sections/Header/Logo';
import HomeIcon from 'public/icons/home.svg';
import Link from 'next/link';

const Styled = {
  AuthHeader: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
  `,

  Button: styled(Link)`
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
  return (
    <Styled.AuthHeader>
      <Styled.Button href="/">
        <HomeIcon />
        Início
      </Styled.Button>

      <Logo />
    </Styled.AuthHeader>
  );
}
