import { IButtonProps } from 'src/interfaces/common/IButton';
import styled from 'styled-components';

export const StyledButton = styled.button<IButtonProps>`
  border: none;
  background-color: ${({ $backgroundColor, theme }) => 
    $backgroundColor ? theme.colors[$backgroundColor] : ''
};
  border-radius: ${({ $borderRadius, theme }) => 
    $borderRadius ? theme.borderRadius[$borderRadius] : ''
};
  color: ${({ $color, theme }) => 
    $color ? theme.colors[$color] : ''
};
  font-size: ${({ $fontSize }) => $fontSize || '1.5rem'};
  line-height: ${({ $lineHeight }) => $lineHeight || '1.5rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || ''};
  text-decoration: ${({ $textDecoration }) => $textDecoration || '1.5rem'};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width || ''};
  max-width: ${({ $maxWidth }) => $maxWidth || ''};
  height: ${({ $height }) => $height || ''};
  
  padding: ${({ $padding }) => $padding || ''};
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  &:hover {
    color: ${({ $hoverColor, theme}) => 
    $hoverColor ? theme.colors[$hoverColor] : ''
};

      background-color: ${({ $hoverBackgroundColor, theme }) => 
    $hoverBackgroundColor ? theme.colors[$hoverBackgroundColor] : ''
};
  }

  &:active {
    color: ${({ $activeColor, theme}) => 
    $activeColor ? theme.colors[$activeColor] : ''
};

    background-color: ${({ $activeBackgroundColor, theme }) => 
    $activeBackgroundColor ? theme.colors[$activeBackgroundColor] : ''
};
  }
`;

export default function Button({ 
  children, 
  $backgroundColor, 
  $borderRadius, 
  $color, 
  $padding, 
  $height, 
  $hoverColor,
  $activeColor,
  $hoverBackgroundColor,
  $activeBackgroundColor,
  $width,
  $maxWidth,
  $fontSize,
  $fontWeight,
  $lineHeight,
  $textDecoration,
  onClick: onClick, 
}: IButtonProps) {
  return (
    <StyledButton 
      $backgroundColor={$backgroundColor} 
      $borderRadius={$borderRadius}
      $color={$color}
      $padding={$padding}
      $height={$height}
      $hoverColor={$hoverColor}
      $activeColor={$activeColor}
      $hoverBackgroundColor={$hoverBackgroundColor}
      $activeBackgroundColor={$activeBackgroundColor}
      $width={$width}
      $maxWidth={$maxWidth}
      $fontSize={$fontSize}
      $lineHeight={$lineHeight}
      $fontWeight={$fontWeight}
      $textDecoration={$textDecoration}
      onClick={onClick} 
    >
      {children}
    </StyledButton>
  );
}
