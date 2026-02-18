'use client';
import InputErrorMessage from '../InputErrorMessage';
import ArrowDownIcon from 'public/icons/arrow-down.svg';
import type { DropdownProps } from './dropdown.type';
import { useDropdown } from './useDropdown';

export function Dropdown({ name, label, icon, options }: DropdownProps) {
  const {
    isOpen,
    isSubmitting,
    selectedValue,
    selectedItem,
    fieldErrorMessage,
    dropdownRef,
    listboxId,
    errorId,
    register,
    toggle,
    selectOption,
  } = useDropdown(name, options);

  return (
    <div className="grid gap-2 w-full" ref={dropdownRef}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <input
          type="hidden"
          id={name}
          {...register(name)}
          aria-invalid={!!fieldErrorMessage}
          aria-describedby={fieldErrorMessage ? errorId : undefined}
        />

        <button
          type="button"
          onClick={toggle}
          disabled={isSubmitting}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          className={`
            select-none relative flex items-center gap-2 h-16 w-full px-6 py-4 bg-dark-slate-800 border-2 rounded-full transition-all duration-300 ease-in-out
            ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}
            ${
              fieldErrorMessage
                ? 'border-red'
                : isOpen || selectedValue
                  ? 'border-white'
                  : 'border-gray-400'
            }
          `}
        >
          <span
            className={`
              flex-1 h-16 content-center text-base text-left font-normal text-white md:text-xl
              ${isSubmitting && 'cursor-no-drop'}
            `}
          >
            {selectedItem?.text}
          </span>

          <span
            aria-hidden="true"
            onClick={toggle}
            className={`
              absolute left-4 z-9 grid grid-cols-[24px_1fr] items-center gap-2 px-2 py-1.5 text-base font-normal bg-dark-slate-800 transition-all duration-300 ease-in-out pointer-events-none md:text-xl
              ${isOpen || selectedValue ? '-translate-y-9' : ''}
              ${
                fieldErrorMessage
                  ? 'text-red'
                  : isOpen || selectedValue
                    ? 'text-white'
                    : 'text-gray-400'
              }
            `}
          >
            {icon}
            {label}
          </span>

          <ArrowDownIcon
            aria-hidden="true"
            focusable="false"
            className={`
              z-50 transition-all duration-300 ease-in-out
              ${isOpen && 'rotate-180'}
              ${fieldErrorMessage ? 'text-red' : isOpen ? 'text-white' : 'text-gray-400'}
            `}
          />
        </button>

        <ul
          role="listbox"
          id={listboxId}
          className={`
            select-none absolute left-0 right-0 z-10 block top-[calc(100%+12px)] bg-white rounded-xl shadow-md transition-[max-height] duration-300 ease-in-out dropdown-scrollbar overflow-hidden divide-y divide-gray-50/25 [--scrollbar-thumb:var(--color-gray-50)] [--scrollbar-track:var(--color-white)]
            ${isOpen ? 'max-h-53 animate-enable-scroll' : 'max-h-0'}
          `}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedValue === option.value}
              onClick={() => selectOption(option.value)}
              className={`flex items-center gap-2 text-xl font-medium py-3 px-6 cursor-pointer text-dark-slate-900 transition duration-300 ease-in-out  ${selectedValue === option.value ? 'bg-gray-300' : 'hover:bg-gray-200 active:bg-gray-100'}`}
            >
              {option.text}
            </li>
          ))}
        </ul>
      </div>

      {fieldErrorMessage && (
        <div id={errorId}>
          <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>
        </div>
      )}
    </div>
  );
}
