import { InputProps } from 'src/components/Inputs/input.type';
import styled from 'styled-components';
import { useInputDate } from './useInputDate';
import { Input, InputContainer, InputDateStyles, InputErrorMessage, Label, LabelLine } from 'src/styles';

const Styled = {
  Label: styled(Label)`
    max-width: 232px;
    cursor: pointer;

    svg {
      cursor: pointer;
    }
  `,

  InputBase: styled(Input)`
    ${InputDateStyles}
  `,
};

export function InputDate({ id, label, icon }: InputProps) {
  const { field, fieldState, inputRef, handleLabelClick, isSubmitting } = useInputDate(id);

  return (
    <InputContainer>
      <Styled.Label
        htmlFor={id}
        $errorMessage={!!fieldState.error}
      >
        <Styled.InputBase
          id={id}
          type='date'
          disabled={isSubmitting}
          value={field.value || ''}
          onChange={field.onChange}
          onClick={handleLabelClick}
          onBlur={field.onBlur}
          name={field.name}
          ref={(el) => {
            field.ref(el);
            inputRef.current = el;
          }}
          $errorMessage={!!fieldState.error}
        />

        <LabelLine className="labelline">
          {icon}
          {label}
        </LabelLine>
      </Styled.Label>

      {fieldState.error && fieldState.error.message &&
        <InputErrorMessage>{ fieldState.error.message }</InputErrorMessage>
      }
    </InputContainer>
  );
}
