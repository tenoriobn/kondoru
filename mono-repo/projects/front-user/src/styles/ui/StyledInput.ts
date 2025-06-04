import styled, { css } from 'styled-components';
import { StyledProps } from 'src/components/Inputs/input.type';

export const InputDateStyles = css`
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const InputFieldContainer = styled.div<StyledProps>`
  display: grid;
  gap: .5rem;
  width: 100%;
`;

export const InputLabelWrapper = styled.label<StyledProps>`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: text;
  position: relative;
  height: 64px;
  width: 100%;
  padding: 1.25rem 1.5rem;

  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  border: .125rem solid ${({ $errorMessage, theme }) => theme.colors[$errorMessage ? 'red' : 'gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  svg path {
    transition: ${({ theme }) => theme.transitions.smoothTransition};
    stroke: ${({ theme }) => theme.colors['gray-400']};
  }

  &:has(input:focus),
  &:has(input:not(:placeholder-shown)) {
    border-color: ${({ $errorMessage, theme }) => theme.colors[$errorMessage ? 'red' : 'white']};

    svg path {
      stroke: ${({ $errorMessage, theme }) => theme.colors[$errorMessage ? 'red' : 'white']};
    }
  }
`;

export const InputBase = styled.input<StyledProps>`
  all: unset;
  flex: 1;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  height: 64px;

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    caret-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:not(:placeholder-shown) + .labelline,
  &:focus + .labelline, &:-webkit-autofill ~ .labelline {
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    color: ${({ $errorMessage, theme }) => theme.colors[$errorMessage ? 'red' : 'white']};
    transform: translate(0px, -36px);
    z-index: 6;
    transition: ${({ theme }) => theme.transitions.smoothTransition} ;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    caret-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LabelLine = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24px 1fr;
  gap: .5rem;
  cursor: text;

  color: ${({ theme }) => theme.colors['gray-400']};
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  left: 16px;
  z-index: 9;
  padding: .375rem .5rem;
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
