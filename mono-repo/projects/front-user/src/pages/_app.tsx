import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@kondoru/design-system/styles/GlobalStyles';
import Theme from '@kondoru/design-system/styles/theme';
import mulish from '../styles/font';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
      theme={{ 
        ...Theme, 
        font: { mulish: mulish.style.fontFamily }, 
      }}
    >
      <GlobalStyles />

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}