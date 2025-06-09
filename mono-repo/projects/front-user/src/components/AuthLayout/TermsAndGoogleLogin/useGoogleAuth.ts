import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import { postData } from 'src/shared';
import postAccessToken from 'src/features/Auth/services/postAccessToken';
import { useState } from 'react';

export function useGoogleAuth() {
  const [googleAuthError, SetGoogleAuthError] = useState('');
  const router = useRouter();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await postData('auth/google', {
          idToken: tokenResponse.code,
        });

        if (response?.accessToken) {
          postAccessToken({ accessToken: response.accessToken });
          await router.push('/');
        }
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
