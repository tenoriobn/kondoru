import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

export function useGoogleAuth() {
  const [googleAuthError, SetGoogleAuthError] = useState('');

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async () => {
      try {
        console.log('Envia autenticação');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Erro ao autenticar com Google:', err);
        SetGoogleAuthError('Erro ao entrar com Google. Tente novamente!');
      }
    },
    flow: 'auth-code',
  });

  return { loginWithGoogle, googleAuthError };
}
