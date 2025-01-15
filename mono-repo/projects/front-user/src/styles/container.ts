import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1192px;

  @media (min-width: 768px) and (max-width: 1320px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 1440px) {
    padding: 2rem 0;
  }
`;
