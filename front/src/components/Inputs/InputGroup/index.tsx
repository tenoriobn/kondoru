import type { InputGroupProps } from './inputGroup.type';

export function InputGroup({ children, formErrorMessage }: InputGroupProps) {
  return (
    <div className="grid gap-6 w-full">
      <div className="grid gap-10 w-full">{children}</div>

      {formErrorMessage && (
        <span className="text-red-500 text-base font-light pl-6.5 self-start">
          {formErrorMessage}
        </span>
      )}
    </div>
  );
}
