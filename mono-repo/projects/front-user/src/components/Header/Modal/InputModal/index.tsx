import { ReactNode } from 'react';
import { transition } from 'src/styles/transitions';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
  cursor: text;
  width: 100%;
  height: 64px;
  padding: 0.5rem 2rem;
  ${transition}

  &:has(input:focus), &:has(input:not(:placeholder-shown)) {
    border-color: ${({ theme }) => theme.colors['white']};
    svg path {
      stroke: ${({ theme }) => theme.colors['white']};
    }
  }

  svg {
    flex-shrink: 0;
  }
`;

export default function InputModal({ icon, children }: {icon: ReactNode, children: ReactNode}) {
  return (
    <Label>
      {icon}
      {children}
    </Label>
  );
}
