import { css } from 'styled-components';

const horizontalPadding = css`
  padding-right: 1rem;
  padding-left: 1rem;

  @media (min-width: 375px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (min-width: 768px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

export default horizontalPadding;
