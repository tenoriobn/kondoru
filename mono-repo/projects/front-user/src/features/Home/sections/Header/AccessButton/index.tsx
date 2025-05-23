import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors['white']};
  border-radius: ${({ theme }) => theme.borderRadius['rounded-48']};
  color: ${({ theme }) => theme.colors['dark-slate-900']};
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  width: 188px;
  padding: .75rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  transition: ${({ theme }) => theme.transitions.smoothTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors['white-80']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['white']};
  }
`;

export default function AccessButton({...props}) {
  return (
    <StyledLink href="/auth/login" {...props}>
      Entrar
    </StyledLink>
  );
}
