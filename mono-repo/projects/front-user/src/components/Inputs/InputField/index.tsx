import { InputBase, InputFieldContainer, InputLabelWrapper, LabelLine } from 'src/styles/ui/StyledInput';
import InputErrorMessage from 'src/components/Inputs/InputErrorMessage';
import { useFieldValidation } from '../useFieldValidation';
import { InputTextProps } from './inputText.type';

export function InputField({ id, label, icon, type }: InputTextProps) {
  const { register, fieldErrorMessage } = useFieldValidation(id);

  return (
    <InputFieldContainer $errorMessage={!!fieldErrorMessage}>
      <InputLabelWrapper
        htmlFor={id}
        $errorMessage={!!fieldErrorMessage}
      >
        <InputBase
          id={id}
          placeholder=""
          type={type}
          {...register(id)}
          $errorMessage={!!fieldErrorMessage}
        />

        <LabelLine className="labelline">
          {icon}
          {label}
        </LabelLine>
      </InputLabelWrapper>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </InputFieldContainer>
  );
}
