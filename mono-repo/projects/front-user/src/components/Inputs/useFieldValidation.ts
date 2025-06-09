import { useFormContext } from 'react-hook-form';

export function useFieldValidation(fieldName: string) {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const fieldErrorMessage = errors?.[fieldName]?.message as string | undefined;

  return { register, fieldErrorMessage, isSubmitting };
}
