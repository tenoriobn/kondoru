import styled from 'styled-components';
import CloseIcon from 'public/icons/close.svg';
import horizontalPadding from '../mixins/horizontalPadding';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 786px;
  width: 100%;
  background: ${({ theme }) => theme.colors['gradient-dark-slate']};
  border-radius: 1.5rem;
  padding: 2rem 0;
  ${horizontalPadding}
`;

export const StyledFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  
  div {
    display: grid;
    gap: 1rem;
  }
`;

export const StyledFormBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

export const StyledFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: .375rem;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
  
  g {
    stroke: ${({ theme }) => theme.colors['gray-400']};
    transition: ${({ theme }) => theme.transitions.smoothTransition};
  }

  &:hover {
    g {
      stroke: ${({ theme }) => theme.colors['white']};
    }
  }
`;

export const StyledContainerInput = styled.div`
  display: grid;
  gap: .75rem;
`;

export const StyledInput = styled.input`
  outline: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-size: 1.25rem;
  line-height: 1.25rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

export const StyledCheckbox = styled.input`
  &[type="checkbox"] {
    appearance: none;
    background-color: transparent;
    position: relative;
    border: .125rem solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: .5rem;
    cursor: pointer;

    width: 32px;
    height: 32px;

    &:checked::after {
      content: "✔";
      position: absolute;
      color: ${({ theme }) => theme.colors['gray-400']};
      font-size: 1.5rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;