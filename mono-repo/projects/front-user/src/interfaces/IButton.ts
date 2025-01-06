export interface IButtonProps {
  $backgroundColor?: string; 
  $borderRadius?: string;   
  $color?: string;        
  $padding?: string;     
  $height?: string;  
  $hoverColor?: string;
  $activeColor?: string;
  $hoverBackgroundColor?: string;
$activeBackgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}