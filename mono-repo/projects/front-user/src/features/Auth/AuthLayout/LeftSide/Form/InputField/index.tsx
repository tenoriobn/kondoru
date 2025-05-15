import styled from 'styled-components';
import { InputFieldProps } from './inputField.type';

const Styled = {
  InputWrapper: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    position: relative;
    height: 64px;
    width: 100%;
  `,

  Input: styled.input`
    appearance: none;
    outline: none;
    position: absolute;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    border: .125rem solid ${({ theme }) => theme.colors['gray-400']};
    border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 500;
    width: 100%;
    padding: 1.125rem 2rem;
    height: 64px;
    z-index: 5;

    &:not(:placeholder-shown), &:focus {
      border-color: ${({ theme }) => theme.colors.white};
    }
    
    &:not(:placeholder-shown) + .labelline, &:focus + .labelline {
      background-color: ${({ theme }) => theme.colors['dark-slate-800']};
      color: ${({ theme }) => theme.colors.white};
      height: 30px;
      transform: translate(22px, -35px) ;
      z-index: 6;
      padding: 0 .5rem;
      transition: ${({ theme }) => theme.transitions.smoothTransition};

      svg {
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
      caret-color: ${({ theme }) => theme.colors.white} !important;
      transition: background-color 5000s ease-in-out 0s;
    }
  `,

  Label: styled.label`
    display: flex;
    align-items: center;
    gap: .5rem;
    z-index: 9;
    cursor: text;

    position: absolute;
    color: ${({ theme }) => theme.colors['gray-400']};
    font-size: 1rem;
    font-weight: 500;
    padding: 0 2rem;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    svg {
      path {
        fill: ${({ theme }) => theme.colors['gray-400']};
      }
    }
  `
};


export default function InputField({ id, label, icon, ...rest }: InputFieldProps) {
  return (
    <Styled.InputWrapper>
      <Styled.Input id={id} placeholder="" required {...rest} />

      <Styled.Label className="labelline" htmlFor={id}>
        {icon}
        {label}
      </Styled.Label>
    </Styled.InputWrapper>
  );
}
