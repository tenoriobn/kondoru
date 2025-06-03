import Link from 'next/link';
import styled from 'styled-components';
import { AuthFooterProps } from './authFooter.type';

const Styled = {
  AuthRedirectMessage: styled.p`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 1rem;

    a {
      font-weight: 700;
      text-decoration: underline;
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
};

export default function AuthFooter({ message, linkText, linkHref }: AuthFooterProps) {
  return (
    <Styled.AuthRedirectMessage>
      {message} <Link href={linkHref}>{linkText}</Link>
    </Styled.AuthRedirectMessage>
  );
}
