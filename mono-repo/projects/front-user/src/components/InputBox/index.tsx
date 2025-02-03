import { IInputBoxProps, ILabelProps } from 'src/interfaces/common/IInputBox';
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
  padding: ${({ $padding }) => $padding || '0.5rem 2rem  padding'};;
  transition: ${({ theme }) => theme.transitions.smoothTransition};

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
`;

export default function InputBox({ icon, children,  $padding }: IInputBoxProps) {
  return (
    <Label $padding={$padding}>
      {icon}
      {children}
    </Label>
  );
}
