import { IButtonProps } from 'src/interfaces/IButton';
import { transition } from 'src/styles/transitions';
import styled from 'styled-components';

const StyledButton = styled.button<IButtonProps>`
  background-color: ${({ $backgroundColor, theme }) => 
    $backgroundColor ? theme.colors[$backgroundColor] : ''
};
  border-radius: ${({ $borderRadius, theme }) => 
    $borderRadius ? theme.borderRadius[$borderRadius] : ''
};
  color: ${({ $color, theme }) => 
    $color ? theme.colors[$color] : ''
};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: ${({ $width }) => $width || ''};
  max-width: ${({ $maxWidth }) => $maxWidth || ''};
  
  padding: ${({ $padding }) => $padding || ''};
  height: ${({ $height }) => $height || ''};
  ${transition};

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
      onClick={onClick} 
    >
      {children}
    </StyledButton>
  );
}
