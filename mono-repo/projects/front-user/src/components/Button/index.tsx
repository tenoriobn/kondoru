import { IButtonProps } from 'src/interfaces/IButton';
import styled from 'styled-components';

const StyledButton = styled.button<IButtonProps>`
  background-color: ${({ $backgroundColor: backgroundColor, theme }) => 
    backgroundColor ? theme.colors[backgroundColor] : 'transparent'};

  border-radius: ${({ $borderRadius: borderRadius, theme }) => 
    borderRadius ? theme.borderRadius[borderRadius] : '0'};

  color: ${({ $color: color, theme }) => 
    color ? theme.colors[color] : 'inherit'};
    
  padding: ${({ $padding: padding }) => padding || '0'};
  height: ${({ $height: height }) => height || 'auto'};
  border: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button({ 
  children, 
  $backgroundColor: backgroundColor, 
  $borderRadius: borderRadius, 
  $color: color, 
  $padding: padding, 
  $height: height, 
  onClick: onClick, 
}: IButtonProps) {
  return (
    <StyledButton 
      $backgroundColor={backgroundColor} 
      $borderRadius={borderRadius}
      $color={color}
      $padding={padding}
      $height={height}
      onClick={onClick} 
    >
      {children}
    </StyledButton>
  );
}
