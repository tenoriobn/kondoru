import styled from 'styled-components';

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors['white']};
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
  position: relative;
  top: -2px;
  padding-top: .125rem;
  padding-bottom: 6.25rem;

  @media (min-width: 768px) {
    gap: 8rem;
    padding-bottom: 8rem;
  }
`;