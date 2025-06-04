import styled from 'styled-components';
import { ErrorMessageProps } from './message.types';

const StyledMessage = styled.span`
  color:  ${({ theme }) => theme.colors['red']};
  font-size: 1rem;
  font-weight: 300;
  padding-left: 1.625rem;
  align-self: flex-start;
`;

export default function InputErrorMessage({ children }: ErrorMessageProps) {
  return (
    <StyledMessage>
      {children}
    </StyledMessage>
  );
}
