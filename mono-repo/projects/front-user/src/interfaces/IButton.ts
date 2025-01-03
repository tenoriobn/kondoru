export interface IButtonProps {
  $backgroundColor?: string; 
  $borderRadius?: string;   
  $color?: string;        
  $padding?: string;     
  $height?: string;  
  onClick?: () => void;
  children: React.ReactNode;
}