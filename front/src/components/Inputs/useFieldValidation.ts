import type { FieldValues, Path } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

export function useFieldValidation<T extends FieldValues>(fieldName: Path<T>) {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<T>();

  const fieldError = errors?.[fieldName];

  const fieldErrorMessage =
    typeof fieldError?.message === 'string' ? fieldError.message : undefined;

  return { register, fieldErrorMessage, isSubmitting };
}
