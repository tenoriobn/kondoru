import styled from 'styled-components';
import { InputFieldProps, WithError } from './inputField.type';
import InputErrorMessage from 'src/features/Auth/AuthLayout/Form/InputErrorMessage';
import { useFieldValidation } from './useFieldValidation';
import PasswordVisibility from './PasswordVisibilityToggle';
import { usePasswordVisibility } from './PasswordVisibilityToggle/usePasswordVisibility';

const Styled = {
  InputFieldContainer: styled.div<WithError>`
    display: grid;
    gap: .5rem;
    width: 100%;
  `,

  InputLabelWrapper: styled.label<WithError>`
    display: flex;
    align-items: center;
    cursor: text;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    position: relative;
    height: 64px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border: .125rem solid
    ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
    transition: ${({ theme }) => theme.transitions.smoothTransition} ;

    padding: 1.25rem 1.5rem;

    svg path {
      transition: ${({ theme }) => theme.transitions.smoothTransition} ;
      stroke: ${({ theme }) => theme.colors['gray-400']};
    }

    &:has(input:focus),
    &:has(input:not(:placeholder-shown)) {
      border-color: 
      ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};

      svg path {
        stroke: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      }
    }

    @media (min-width: 768px) {
      padding: 1.25rem 2rem;
    }
  `,

  Input: styled.input<WithError>`
    all: unset;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    height: 64px;

    &:not(:placeholder-shown) + .labelline,
    &:focus + .labelline, &:-webkit-autofill ~ .labelline {
      background-color: ${({ theme }) => theme.colors['dark-slate-800']};
      color: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      transform: translate(0px, -36px);
      z-index: 6;
      transition: ${({ theme }) => theme.transitions.smoothTransition} ;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      caret-color: ${({ theme }) => theme.colors.white} !important;
      transition: background-color 5000s ease-in-out 0s;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  LabelLine: styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: .5rem;
    cursor: text;

    color: ${({ theme }) => theme.colors['gray-400']};
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    left: 16px;
    z-index: 9;
    padding: .375rem .5rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition} ;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      left: 24px;
    }
  `
};

export default function InputField({ id, label, icon, type, ...rest }: InputFieldProps) {
  const { register, fieldErrorMessage } = useFieldValidation(id);
  const { isPasswordInput, passwordView, setPasswordView, resolvedType } = usePasswordVisibility(type, id);

  return (
    <Styled.InputFieldContainer $errorMessage={!!fieldErrorMessage}>
      <Styled.InputLabelWrapper htmlFor={id} $errorMessage={!!fieldErrorMessage}>
        <Styled.Input
          id={id}
          placeholder=""
          type={resolvedType}
          {...register(id)}
          {...rest}
          $errorMessage={!!fieldErrorMessage}
        />

        <Styled.LabelLine className="labelline">
          {icon}
          {label}
        </Styled.LabelLine>

        {isPasswordInput && (
          <PasswordVisibility 
            passwordView={passwordView}
            setPasswordView={setPasswordView}
          />
        )}
      </Styled.InputLabelWrapper>

      {fieldErrorMessage && <InputErrorMessage>{fieldErrorMessage}</InputErrorMessage>}
    </Styled.InputFieldContainer>
  );
}
