import { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

export function useInputDate(name: string) {
  const { 
    control,
    formState: { isSubmitting },
  } = useFormContext();
  const { field, fieldState } = useController({ name, control, defaultValue: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.();
    }
  };

  return {
    field,
    fieldState,
    inputRef,
    handleLabelClick,
    isSubmitting
  };
}
