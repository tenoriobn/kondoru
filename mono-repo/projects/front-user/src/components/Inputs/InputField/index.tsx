import { useFieldValidation } from '../useFieldValidation';
import { InputTextProps } from './inputText.type';
import { Input, InputContainer, InputErrorMessage, Label, LabelLine } from 'src/styles';

export function InputField({ id, label, icon, type }: InputTextProps) {
  const { register, fieldErrorMessage, isSubmitting } = useFieldValidation(id);

  return (
    <InputContainer>
      <Label
        htmlFor={id}
        $errorMessage={!!fieldErrorMessage}
      >
        <Input
          id={id}
          placeholder=""
          type={type}
          disabled={isSubmitting}
          {...register(id)}
          $errorMessage={!!fieldErrorMessage}
        />

        <LabelLine className="labelline">
          {icon}
          {label}
        </LabelLine>
      </Label>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </InputContainer>
  );
}
