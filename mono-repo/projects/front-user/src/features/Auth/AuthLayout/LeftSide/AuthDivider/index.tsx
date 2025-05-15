import styled from 'styled-components';
import { AuthDividerProps } from './authDivider.type';

const Styled = {
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
};

export default function AuthDivider({ label }: AuthDividerProps) {
  return (
    <Styled.AuthDivider>
      <Styled.Line></Styled.Line>
      <Styled.DividerLabel>{label}</Styled.DividerLabel>
      <Styled.Line></Styled.Line>
    </Styled.AuthDivider>

  );
}
