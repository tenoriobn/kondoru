export interface IButtonProps {
  $backgroundColor?: string;
  $color?: string;
  $borderRadius?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $lineHeight?: string;
  $textDecoration?: string;
  $hoverColor?: string;
  $activeColor?: string;
  $hoverBackgroundColor?: string;
  $activeBackgroundColor?: string;
  $height?: string;
  $width?: string;
  $maxWidth?: string,
  $padding?: string;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
