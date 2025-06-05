import { ReactNode } from 'react';
import { LayoutWrapper } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  ModalOverlay: styled.section`
    background-color: ${({ theme }) => theme.colors['black-82']};
    backdrop-filter: blur(12px);
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    display: inherit;
    padding: 5rem 0;
    overflow-y: auto;
    overflow-x: hidden;
  `,

  LayoutWrapper: styled(LayoutWrapper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
  `,
};


export default function Modal({ children }: { children: ReactNode }) {
  return (
    <Styled.ModalOverlay>
      <Styled.LayoutWrapper>
        {children}
      </Styled.LayoutWrapper>
    </Styled.ModalOverlay>
  );
}
