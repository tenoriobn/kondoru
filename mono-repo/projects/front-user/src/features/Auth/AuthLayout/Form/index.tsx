import styled from 'styled-components';
import { FormProps } from './form.type';

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  `,
};

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <Styled.Form onSubmit={onSubmit}>
      {children}
    </Styled.Form>
  );
}
