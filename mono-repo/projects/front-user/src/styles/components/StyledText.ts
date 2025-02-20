import styled from 'styled-components';

export const StyledSubtitle = styled.h2`
  font-size: clamp(3.5rem, 16vw, 4rem);
  font-weight: 800;
  line-height: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledHeading = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};

  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2rem;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['gray-400']};
`;