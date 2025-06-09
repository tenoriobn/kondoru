import styled, { keyframes } from 'styled-components';

const dotFlashing = keyframes`
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
  100% { content: ''; }
`;

export const AnimatedDots = styled.span`
  display: inline-block;
  width: 14px;
  text-align: left;

  &::after {
    content: '';
    animation: ${dotFlashing} 1.2s steps(4, jump-none) infinite;
  }
`;
