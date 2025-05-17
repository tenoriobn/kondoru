import { useFormContext } from 'react-hook-form';

export function useFieldValidation(fieldName: string) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors?.[fieldName]?.message as string | undefined;
  const hasError = !!errorMessage;

  return { register, errorMessage, hasError };
}
