import styled from 'styled-components';
import { InputFieldProps, WithError } from './inputField.type';
import ErrorMessage from 'components/ErrorMessage';
import { useFieldValidation } from './useFieldValidation';

const Styled = {
  InputField: styled.div<WithError>`
    display: grid;
    gap: .5rem;
    width: 100%;
  `,

  InputWrapper: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    position: relative;
    height: 64px;
    width: 100%;
  `,

  Input: styled.input<WithError>`
    appearance: none;
    outline: none;
    position: absolute;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border: .125rem solid
    ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    padding: 1.25rem 1.5rem;
    height: 64px;
    z-index: 5;

    &:not(:placeholder-shown), &:focus {
      border-color: ${({ $errorMessage, theme }) =>
    $errorMessage ? theme.colors['red'] : theme.colors.white};
    }

    &:not(:placeholder-shown) + .labelline,
    &:focus + .labelline {
      background-color: ${({ theme }) => theme.colors['dark-slate-800']};
      color: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      transform: translate(0px, -36px);
      z-index: 6;
      transition: ${({ theme }) => theme.transitions.smoothTransition};

      svg path {
        stroke: ${({ $errorMessage, theme }) => $errorMessage ? theme.colors['red'] : theme.colors.white};
      }
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      caret-color: ${({ theme }) => theme.colors.white} !important;
      transition: background-color 5000s ease-in-out 0s;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
      padding: 1.25rem 2rem;
    }
  `,

  Label: styled.label`
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
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg path {
      stroke: ${({ theme }) => theme.colors['gray-400']};
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
      left: 24px;
    }
  `
};

export default function InputField({ id, label, icon, ...rest }: InputFieldProps) {
  const { register, fieldErrorMessage } = useFieldValidation(id);

  return (
    <Styled.InputField $errorMessage={!!fieldErrorMessage}>
      <Styled.InputWrapper>
        <Styled.Input
          id={id}
          placeholder=""
          {...register(id)}
          {...rest}
          $errorMessage={!!fieldErrorMessage}
        />

        <Styled.Label className="labelline" htmlFor={id}>
          {icon}
          {label}
        </Styled.Label>
      </Styled.InputWrapper>

      {fieldErrorMessage && <ErrorMessage>{fieldErrorMessage}</ErrorMessage>}
    </Styled.InputField>
  );
}
