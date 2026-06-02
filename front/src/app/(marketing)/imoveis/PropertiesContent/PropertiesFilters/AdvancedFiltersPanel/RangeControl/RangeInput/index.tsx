import type { RangeInputProps } from './rangeInput.type';

export default function RangeInput({
  id,
  label,
  value,
  onChange,
  onBlur,
  icon,
  isSubmitting,
}: RangeInputProps) {
  return (
    <label
      htmlFor={id}
      className={`
        rounded-full relative flex gap-2 cursor-text h-max w-full px-6 py-4 bg-dark-slate-800 border-2 transition-all duration-300 ease-in-out has-[input:disabled]:cursor-not-allowed
        has-[input:focus]:mt-3 has-[input:not(:placeholder-shown)]:mt-3
        border-gray-400 has-[input:focus]:border-white has-[input:not(:placeholder-shown)]:border-white
      `}
    >
      <input
        id={id}
        type="text"
        value={value}
        placeholder=" "
        onChange={onChange}
        onBlur={onBlur}
        disabled={isSubmitting}
        className={`peer flex-1 w-full h-7 bg-transparent text-base font-normal text-white outline-none box-border md:text-xl ${isSubmitting && 'cursor-no-drop'}`}
      />

      <div className="absolute left-4 grid grid-cols-[24px_1fr] items-center gap-2 px-2 py-1.5 text-base md:text-xl text-gray-400 bg-dark-slate-800 pointer-events-none transition-all duration-300 peer-focus:text-white peer-not-placeholder-shown:text-white peer-focus:-translate-y-10.5 peer-not-placeholder-shown:-translate-y-10.5">
        {icon}
        {label}
      </div>
    </label>
  );
}
