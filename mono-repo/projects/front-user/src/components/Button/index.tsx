import { ButtonProps } from './button.types';
import styled from 'styled-components';

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ $backgroundColor, theme }) => $backgroundColor ? theme.colors[$backgroundColor] : ''};
  border-radius: ${({ $borderRadius, theme }) => $borderRadius ? theme.borderRadius[$borderRadius] : ''};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ $color, theme }) => $color ? theme.colors[$color] : ''};
  font-size: ${({ $fontSize }) => $fontSize || '1.255rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || '600'};
  text-decoration: ${({ $textDecoration }) => $textDecoration || ''};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width || ''};
  max-width: ${({ $maxWidth }) => $maxWidth || ''};
  height: ${({ $height }) => $height || ''};

  padding: ${({ $padding }) => $padding || ''};
  transition: ${({ theme }) => theme.transitions.smoothTransition};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  z-index: 1;

  &:hover {
    ${({ disabled, theme, $hoverColor, $hoverBackgroundColor }) =>
    !disabled && `
        color: ${$hoverColor ? theme.colors[$hoverColor] : ''};
        background-color: ${$hoverBackgroundColor ? theme.colors[$hoverBackgroundColor] : ''};
      `
}
  }

  &:active {
    ${({ disabled, theme, $activeColor, $activeBackgroundColor }) =>
    !disabled && `
        color: ${$activeColor ? theme.colors[$activeColor] : ''};
        background-color: ${$activeBackgroundColor ? theme.colors[$activeBackgroundColor] : ''};
      `
}
  }
`;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}

