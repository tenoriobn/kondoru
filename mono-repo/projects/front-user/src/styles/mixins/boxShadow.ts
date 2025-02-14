import { css } from 'styled-components';

export const shadowXL = css`
  -webkit-box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
  -moz-box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
  box-shadow: 12px 10px 15px -8px ${({ theme }) => theme.colors['black']};
`;

export const shadowSM = css`
  -webkit-box-shadow: 12px 10px 15px -14px ${({ theme }) => theme.colors['black']};
  -moz-box-shadow: 12px 10px 15px -14px ${({ theme }) => theme.colors['black']};
  box-shadow: 12px 10px 15px -14px ${({ theme }) => theme.colors['black']};
`;