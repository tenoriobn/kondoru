import Link from 'next/link';
import styled from 'styled-components';

export const StyledCardContainer = styled(Link)`
  display: grid;
  row-gap: 1rem;
  cursor: pointer;
  max-width: 401px;

  @media (min-width: 768px) {
    max-width: 376px;
  }
`;

export const StyledCardImage = styled.img`
  border-radius: 1.5rem;
  width: 100%;
  box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
  clip-path: inset(-20px);
`;

export const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledText = styled.h4`
  color: ${({ theme }) => theme.colors['dark-slate-58']};
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 500;
`;
