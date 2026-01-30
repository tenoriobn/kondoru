import type { AuthDividerProps } from './authDivider.type';

export default function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div role="separator" aria-label={label} className="text-center">
      <p className="text-white text-base md:text-xl font-medium">{label}</p>
    </div>
  );
}
