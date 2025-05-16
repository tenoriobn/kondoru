import Link from 'next/link';
import styled from 'styled-components';

const Styled = {
  ForgotPasswordLink: styled(Link)`
    font-size: 1.25rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    text-decoration: underline;

    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &:hover {
      color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      color: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function ForgotPasswordLink() {
  return (
    <Styled.ForgotPasswordLink href='/auth/recuperar-senha'>
      Esqueceu a senha?
    </Styled.ForgotPasswordLink>
  );
}
