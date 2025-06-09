import styled from 'styled-components';
import { InputGroupProps } from './inputGroup.type';
import { InputErrorMessage } from 'src/styles';

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

export function InputGroup({ children, formErrorMessage}: InputGroupProps) {
  return (
    <Styled.InputsAndErrorContainer>
      <Styled.inputsGroup>
        {children}
      </Styled.inputsGroup>

      {formErrorMessage && (
        <InputErrorMessage>{formErrorMessage}</InputErrorMessage>
      )}
    </Styled.InputsAndErrorContainer>
  );
}
