import type { AuthDividerProps } from './authDivider.type';

export default function AuthDivider({ label }: AuthDividerProps) {
  return <p className="text-white text-base md:text-xl font-medium text-center">{label}</p>;
}
