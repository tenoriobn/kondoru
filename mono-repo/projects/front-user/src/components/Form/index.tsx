import styled from 'styled-components';
import { FormProps } from './form.type';
import { FormProvider } from 'react-hook-form';

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  `,
};

export default function Form({ children, onSubmit, methods }: FormProps) {
  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={onSubmit}>
        {children}
      </Styled.Form>
    </FormProvider>
  );
}
