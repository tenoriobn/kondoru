import { useState } from 'react';
import styled from 'styled-components';
import { InputProps } from 'src/components/Inputs/input.type';
import { useFieldValidation } from '../useFieldValidation';
import ViewIcon from 'public/icons/view.svg';
import NoViewIcon from 'public/icons/no-view.svg';
import { Input, InputContainer, InputErrorMessage, Label, LabelLine } from 'src/styles';

const Styled = {
  Icon: styled.div`
    cursor: pointer;
    user-select: none;
    z-index: 10;
  `,
};

export function InputPassword({ id, label, icon }: InputProps) {
  const [passwordView, setPasswordView] = useState(false);
  const IconComponent = passwordView ? ViewIcon : NoViewIcon;
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
          type={passwordView ? 'text' : 'password'}
          disabled={isSubmitting}
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
      </Label>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </InputContainer>
  );
}
