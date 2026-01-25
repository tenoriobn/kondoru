import type { InputErrorMessageProps } from './inputErrorMessage.type';

export default function InputErrorMessage({ children }: InputErrorMessageProps) {
  return <span className="text-red text-base font-light pl-6.5 self-start">{children}</span>;
}
