import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import GlobalStyles from '../styles/GlobalStyles';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}