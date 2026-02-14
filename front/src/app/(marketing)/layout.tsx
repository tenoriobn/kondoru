import type { ReactNode } from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
