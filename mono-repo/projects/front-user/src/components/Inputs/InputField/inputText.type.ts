import { InputProps } from '../input.type';

export interface InputTextProps extends InputProps {
  type: 'text' | 'email' | 'tel';
}