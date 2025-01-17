export interface IButtonProps {
  $backgroundColor?: string; 
  $borderRadius?: string;   
  $color?: string;        
  $padding?: string;     
  $height?: string;  
  $hoverColor?: string;
  $activeColor?: string;
  $hoverBackgroundColor?: string;
  $width?: string;
  $maxWidth?: string,
  $activeBackgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}