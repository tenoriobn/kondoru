import styled from 'styled-components';
import { FormProps } from './form.type';

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,

  LoginButton: styled.button`   
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};

    color: ${({ theme }) => theme.colors['dark-slate-800']};
    font-size: 1.25rem;
    font-weight: 600;

    max-width: 166px;
    width: 100%;

    padding: 1rem 2rem;
    margin-top: 2rem;
  `,
};

export default function Form({ children }: FormProps) {
  return (
    <Styled.Form action="">
      {children}
    </Styled.Form>
  );
}
