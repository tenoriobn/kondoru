import Link from 'next/link';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
  display: grid;
  row-gap: 1rem;
  cursor: pointer;
  max-width: 401px;

  @media (min-width: 768px) {
    max-width: 376px;
  }
`;

export const CardImage = styled.img`
  border-radius: 1.5rem;
  width: 100%;
  aspect-ratio: 4 / 3.26; 
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardText = styled.h4`
  color: ${({ theme }) => theme.colors['dark-slate-58']};
  font-size: 1rem;
  font-weight: 500;
`;
