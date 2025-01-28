import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 3.5rem;
  letter-spacing: -3.4px;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledSubtitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledParagraph = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['gray-400']};
`;