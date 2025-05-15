import styled from 'styled-components';
import { useRouter } from 'next/router';
import Logo from 'src/features/Home/sections/Header/Logo';
import BackIcon from 'public/icons/back.svg';

const Styled = {
  AuthHeader: styled.header`
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
};

export default function AuthHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Styled.AuthHeader>
      <Styled.Button onClick={handleBack}>
        <BackIcon />
        Voltar
      </Styled.Button>

      <Logo />
    </Styled.AuthHeader>
  );
}
