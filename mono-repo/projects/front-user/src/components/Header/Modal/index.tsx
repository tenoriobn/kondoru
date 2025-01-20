import { ReactNode } from 'react';
import { Container } from 'src/styles/container';
import styled from 'styled-components';

const StyledModalOverlay = styled.section`
  background-color: ${({ theme }) => theme.colors['black-82']};
  backdrop-filter: blur(12px);
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const StyledModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        {children}
      </StyledModalContainer>
    </StyledModalOverlay>
  );
}
