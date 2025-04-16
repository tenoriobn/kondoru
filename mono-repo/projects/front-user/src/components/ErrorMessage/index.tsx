import styled from 'styled-components';
import { ErrorMessage } from './message.types';

const StyledMessage = styled.span`
  color:  ${({ theme }) => theme.colors['red']};
  font-weight: 300;
  padding-left: 2rem;
`;

export default function ErrorMessage({ children }: ErrorMessage) {
  return (
    <StyledMessage>
      {children}
    </StyledMessage>
  );
}
