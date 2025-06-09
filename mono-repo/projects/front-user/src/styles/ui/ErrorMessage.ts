import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color:  ${({ theme }) => theme.colors['red']};
  font-size: 1rem;
  font-weight: 300;
`;

export const InputErrorMessage = styled(ErrorMessage)`
  padding-left: 1.625rem;
  align-self: flex-start;
`;
