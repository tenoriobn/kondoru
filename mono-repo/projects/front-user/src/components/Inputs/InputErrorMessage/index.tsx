import styled from 'styled-components';
import { ErrorMessageProps } from './message.types';

const StyledMessage = styled.span`
  color:  ${({ theme }) => theme.colors['red']};
  font-size: 1rem;
  font-weight: 300;
  padding-left: 1.5rem;
  align-self: flex-start;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`;

export default function InputErrorMessage({ children }: ErrorMessageProps) {
  return (
    <StyledMessage>
      {children}
    </StyledMessage>
  );
}
