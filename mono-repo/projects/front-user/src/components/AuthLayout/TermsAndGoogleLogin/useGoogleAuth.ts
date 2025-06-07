import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import { postData } from 'src/shared';
import postAccessToken from 'src/features/Auth/services/postAccessToken';

export function useGoogleAuth() {
  const router = useRouter();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await postData('auth/google', {
          idToken: tokenResponse.code,
        });

        if (response?.accessToken) {
          postAccessToken({ accessToken: response.accessToken });
          router.push('/');
        }
      } catch (err) {
        console.error('Erro ao autenticar com Google:', err);
        alert('Erro ao entrar com o Google');
      }
    },
    flow: 'auth-code',
  });

  return { loginWithGoogle };
}
