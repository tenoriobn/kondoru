import { css } from 'styled-components';

export const shadowXL = css`
  -webkit-box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
  -moz-box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
  box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
`;