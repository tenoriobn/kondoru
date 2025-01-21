import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 3.5rem;
  letter-spacing: -3.4px;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledSubtitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors['gray-400']};
`;

export const StyledCheckbox = styled.input`
  &[type="checkbox"] {
    appearance: none;
    background-color: transparent;
    position: relative;
    border: .125rem solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: .5rem;
    cursor: pointer;

    width: 32px;
    height: 32px;

    &:checked::after {
      content: "✔";
      position: absolute;
      color: ${({ theme }) => theme.colors['gray-400']};
      font-size: 1.5rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;