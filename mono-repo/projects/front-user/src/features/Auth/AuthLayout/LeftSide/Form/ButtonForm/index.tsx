import styled from 'styled-components';
import { ButtonFormProps } from './buttonForm.type';

const Styled = {
  LoginButton: styled.button`   
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};

    color: ${({ theme }) => theme.colors['dark-slate-800']};
    font-size: 1.25rem;
    font-weight: 600;

    min-width: 166px;
    max-width: max-content;
    width: 100%;

    padding: 1rem 2rem;
    margin-top: 2rem;

    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &:hover {
      background-color: ${({ theme }) => theme.colors['white-80']};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function ButtonForm({ children }: ButtonFormProps) {
  return (
    <Styled.LoginButton>{children}</Styled.LoginButton>
  );
}
