import { useState } from 'react';
import styled from 'styled-components';
import { InputBase, InputFieldContainer, InputLabelWrapper, LabelLine } from 'src/styles/ui/StyledInput';
import InputErrorMessage from 'src/components/Inputs/InputErrorMessage';
import { InputProps } from 'src/components/Inputs/input.type';
import { useFieldValidation } from '../useFieldValidation';
import ViewIcon from 'public/icons/view.svg';
import NoViewIcon from 'public/icons/no-view.svg';

const Styled = {
  Icon: styled.div`
    cursor: pointer;
    user-select: none;
    z-index: 10;
  `,
};

export function InputPassword({ id, label, icon }: InputProps) {
  const { register, fieldErrorMessage } = useFieldValidation(id);
  const [passwordView, setPasswordView] = useState(false);
  const IconComponent = passwordView ? ViewIcon : NoViewIcon;

  return (
    <InputFieldContainer $errorMessage={!!fieldErrorMessage}>
      <InputLabelWrapper
        htmlFor={id}
        $errorMessage={!!fieldErrorMessage}
      >
        <InputBase
          id={id}
          placeholder=""
          type={passwordView ? 'text' : 'password'}
          {...register(id)}
          $errorMessage={!!fieldErrorMessage}
        />

        <LabelLine className="labelline">
          {icon}
          {label}
        </LabelLine>

        <Styled.Icon
          as={IconComponent}
          onClick={() => setPasswordView(!passwordView)}
        />
      </InputLabelWrapper>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </InputFieldContainer>
  );
}
