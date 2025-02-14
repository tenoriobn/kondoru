import { IInputBoxProps, ILabelProps } from 'src/interfaces/common/IInputBox';
import { shadowSM } from 'src/styles/mixins/boxShadow';
import styled from 'styled-components';

const Label = styled.label<ILabelProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
  cursor: text;
  width: 100%;
  height: 64px;
  padding: ${({ $padding }) => $padding || '0.5rem 2rem'};;
  transition: ${({ theme }) => theme.transitions.smoothTransition};
  ${shadowSM}

  svg {
    flex-shrink: 0;

    path {
      transition: ${({ theme }) => theme.transitions.smoothTransition};
    }
  }

  &:has(input:focus), 
  &:has(input:not(:placeholder-shown)) {
    border-color: ${({ theme }) => theme.colors['white']};

    svg path {
      stroke: ${({ theme }) => theme.colors['white']};
    }
  }

  ${({ $hasError, theme }) => $hasError && `
    border-color: ${theme.colors['red']}!important;
    svg path {
      stroke: ${theme.colors['red']}!important;
    }
  `}
`;

export default function InputBox({ icon, children,  $padding, hasError}: IInputBoxProps) {
  return (
    <Label $padding={$padding} $hasError={hasError}>
      {icon}
      {children}
    </Label>
  );
}
