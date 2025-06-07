import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import mulish from '../styles/font';
import GlobalStyles from '@kondoru/design-system/styles/GlobalStyles';
import Theme from '@kondoru/design-system/styles/theme';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#243441" />
        <title>KondoRu - Conectando Você ao Imóvel dos Seus Sonhos</title>
      </Head>

      <ThemeProvider
        theme={{
          ...Theme,
          font: { mulish: mulish.style.fontFamily },
        }}
      >
        <GlobalStyles />

        <RecoilRoot>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}