import { IErrorMessage } from 'src/interfaces/common/IMessage';
import styled from 'styled-components';

const StyledMessage = styled.span`
  color:  ${({ theme }) => theme.colors['red']};
  font-weight: 300;
  padding-left: 2rem;
`;

export default function ErrorMessage({ children }: IErrorMessage) {
  return (
    <StyledMessage>
      {children}
    </StyledMessage>
  );
}
