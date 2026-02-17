import { useState, useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useClickOutside } from 'src/hooks';
import type { DropdownOption } from './dropdown.type';

export function useDropdown(name: string, options: DropdownOption[]) {
  const {
    register,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const selectedValue = useWatch({ control, name });

  const fieldErrorMessage =
    typeof errors?.[name]?.message === 'string' ? errors[name]?.message : undefined;

  const selectedItem = options.find((option) => option.value === selectedValue);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggle = () => {
    if (!isSubmitting) {
      setIsOpen((prev) => !prev);
    }
  };

  const selectOption = (value: string) => {
    setValue(name, value, {
      shouldValidate: true,
      shouldTouch: true,
    });

    setIsOpen(false);
  };

  const listboxId = `${name}-listbox`;
  const errorId = `${name}-error`;

  return {
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
  };
}
