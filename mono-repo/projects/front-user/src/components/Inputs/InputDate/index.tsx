import InputErrorMessage from 'src/components/Inputs/InputErrorMessage';
import { InputBase, InputDateStyles, InputFieldContainer, InputLabelWrapper, LabelLine } from 'src/styles/ui/StyledInput';
import { InputProps } from 'src/components/Inputs/input.type';
import styled from 'styled-components';
import { useInputDate } from './useInputDate';

const Styled = {
  InputLabelWrapper: styled(InputLabelWrapper)`
    max-width: 232px;
    cursor: pointer;

    svg {
      cursor: pointer;
    }
  `,

  InputBase: styled(InputBase)`
    ${InputDateStyles}
  `,
};

export function InputDate({ id, label, icon }: InputProps) {
  const { field, fieldState, inputRef, handleLabelClick } = useInputDate(id);

  return (
    <InputFieldContainer $errorMessage={!!fieldState.error}>
      <Styled.InputLabelWrapper
        htmlFor={id}
        $errorMessage={!!fieldState.error}
      >
        <Styled.InputBase
          id={id}
          type='date'
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
      </Styled.InputLabelWrapper>

      {fieldState.error && fieldState.error.message &&
        <InputErrorMessage>{ fieldState.error.message }</InputErrorMessage>
      }
    </InputFieldContainer>
  );
}
