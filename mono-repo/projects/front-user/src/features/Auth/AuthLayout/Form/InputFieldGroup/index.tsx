import styled from 'styled-components';
import { InputFieldGroupProps } from './inputFieldGroup.type';
import ErrorMessage from 'src/components/ErrorMessage';

const Styled = {
  InputsAndErrorContainer: styled.div`
    display: grid;
    gap: 1.5rem;
    width: 100%;
  `,

  inputsGroup: styled.div`
    display: grid;
    gap: 2.5rem;
    width: 100%;
  `,
};

export default function InputFieldGroup({ children, formErrorMessage}: InputFieldGroupProps) {
  return (
    <Styled.InputsAndErrorContainer>
      <Styled.inputsGroup>
        {children}
      </Styled.inputsGroup>

      {formErrorMessage && (
        <ErrorMessage>{formErrorMessage}</ErrorMessage>
      )}
    </Styled.InputsAndErrorContainer>
  );
}
