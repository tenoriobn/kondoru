import InputErrorMessage from 'src/components/InputErrorMessage';
import { useFieldValidation } from '../useFieldValidation';
import type { InputTextProps } from './inputText.type';

export function InputField({ id, label, Icon, type }: InputTextProps) {
  const { register, fieldErrorMessage, isSubmitting } = useFieldValidation(id);

  return (
    <div className="grid gap-2 w-full">
      <label
        htmlFor={id}
        className={`
          relative flex items-center gap-2 cursor-text h-16 w-full px-6 py-4 bg-dark-slate-800 border-2 rounded-full transition-all duration-300 ease-in-out has-[input:disabled]:cursor-not-allowed
          ${!!fieldErrorMessage ? 'border-red has-[input:focus]:border-red has-[input:not(:placeholder-shown)]:border-red' : 'border-gray-400 has-[input:focus]:border-white has-[input:not(:placeholder-shown)]:border-white'}
        `}
      >
        <input
          id={id}
          type={type}
          disabled={isSubmitting}
          {...register(id)}
          autoComplete="email"
          inputMode="email"
          aria-invalid={!!fieldErrorMessage}
          aria-describedby={!!fieldErrorMessage ? id : undefined}
          placeholder=""
          className={`
            peer flex-1 w-full h-16 bg-transparent text-base font-normal text-white outline-none box-border md:text-xl  
            ${isSubmitting && 'cursor-no-drop'}
          `}
        />

        <div
          aria-hidden="true"
          className={`
            absolute left-4 z-9 grid grid-cols-[24px_1fr] items-center gap-2 px-2 py-1.5 text-base font-normal text-gray-400 bg-dark-slate-800 transition-all duration-300 ease-in-out pointer-events-none md:text-xl peer-focus:-translate-y-9 peer-not-placeholder-shown:-translate-y-9 peer-autofill:-translate-y-9 
            ${!!fieldErrorMessage ? ` peer-focus:text-red peer-not-placeholder-shown:text-red peer-autofill:text-red` : 'peer-focus:text-white peer-not-placeholder-shown:text-white peer-autofill:text-white'}
          `}
        >
          {Icon}
          {label}
        </div>
      </label>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </div>
  );
}
