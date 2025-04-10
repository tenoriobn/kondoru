import styled from 'styled-components';

export const StyledMainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
  padding-bottom: 6.25rem;

  @media (min-width: 768px) {
    gap: 8rem;
    padding-bottom: 8rem;
  }
`;