import styled from 'styled-components';
import CloseIcon from 'public/icons/close.svg';
import horizontalPadding from '../mixins/horizontalPadding';
import { filterXL } from '../mixins/filterShadow';

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
  padding: 1.5rem 0 2rem 0;
  ${horizontalPadding}
`;

export const StyledFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: relative;
  
  div {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    div {
      margin-top: 2.25rem;
    }
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
  ${filterXL}
  
  g {
    stroke: ${({ theme }) => theme.colors['gray-400']};
    transition: ${({ theme }) => theme.transitions.smoothTransition};
  }

  &:hover {
    g {
      stroke: ${({ theme }) => theme.colors['white']};
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    right: -40px;
  }
`;

export const StyledContainerInput = styled.div`
  display: grid;
  gap: .75rem;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  outline: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-size: 1.25rem;
  line-height: 1.25rem;
  width: 100%;

  &:-webkit-autofill { 
    -webkit-background-clip: text;
    -webkit-text-fill-color: white !important;
  }

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

    ${filterXL}

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