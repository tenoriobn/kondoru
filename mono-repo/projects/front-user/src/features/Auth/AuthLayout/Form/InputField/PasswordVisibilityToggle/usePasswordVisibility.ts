import { useState } from 'react';

export function usePasswordVisibility(type: string | undefined, id: string) {
  const isPasswordInput = id === 'password' || id === 'passwordConfirmation';
  const [passwordView, setPasswordView] = useState(false);
  
  const resolvedType = isPasswordInput && passwordView ? 'text' : type;

  return { 
    isPasswordInput, 
    passwordView, 
    setPasswordView, 
    resolvedType 
  };
}
