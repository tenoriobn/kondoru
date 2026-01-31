'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { GoogleAuthProviderProps } from './googleAuthProvider.type';

export default function GoogleAuthProvider({ children }: GoogleAuthProviderProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </GoogleOAuthProvider>
  );
}
