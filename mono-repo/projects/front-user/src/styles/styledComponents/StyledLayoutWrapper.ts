import styled from 'styled-components';
import horizontalPadding from '../mixins/horizontalPadding';

const StyledLayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1192px;
  width: 100%;
  ${horizontalPadding} 

  @media (min-width: 1366px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export default StyledLayoutWrapper;