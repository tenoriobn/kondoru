import styled from 'styled-components';
import { AuthDividerProps } from './authDivider.type';

const Styled = {
  DividerText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,
};

export default function AuthDivider({ label }: AuthDividerProps) {
  return (
    <Styled.DividerText>{label}</Styled.DividerText>
  );
}
