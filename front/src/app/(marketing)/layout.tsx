import type { ReactNode } from 'react';
import Header from './inicio/Header';
import Footer from './inicio/Footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
