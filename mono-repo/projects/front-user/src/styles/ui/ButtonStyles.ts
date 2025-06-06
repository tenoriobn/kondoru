import styled from 'styled-components';

export const ButtonBase = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius['rounded-full']};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  padding: .5rem;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.smoothTransition};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const FormButton = styled(ButtonBase)`   
  background-color: ${({ theme }) => theme.colors['gray-400']};
  color: ${({ theme }) => theme.colors['dark-slate-800']};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors['white-80']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['white']};
  }
`;

export const AuthButton = styled(FormButton)`   
  min-width: 166px;
  max-width: max-content;
  width: 100%;
  padding: 1rem 2rem;
  margin-top: .5rem;
`;