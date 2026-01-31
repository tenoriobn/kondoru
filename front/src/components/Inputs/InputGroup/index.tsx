import type { InputGroupProps } from './inputGroup.type';

export function InputGroup({ legend, children, formErrorMessage }: InputGroupProps) {
  return (
    <fieldset className="grid gap-6 w-full">
      <legend className="sr-only">{legend}</legend>

      <div className="grid gap-10 w-full">{children}</div>

      {formErrorMessage && (
        <span className="text-red-500 text-base font-light pl-6.5 self-start">
          {formErrorMessage}
        </span>
      )}
    </fieldset>
  );
}
