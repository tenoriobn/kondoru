import type { ErrorMessageProps } from './ErrorMessage.type';

export default function ErrorMessage({ children, className }: ErrorMessageProps) {
  return <span className={`text-red text-base font-light ${className}`}>{children}</span>;
}
