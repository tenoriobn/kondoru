import type { Metadata, Viewport } from "next";
import { Mulish } from 'next/font/google';
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "KondoRu - Conectando Você ao Imóvel dos Seus Sonhos",
  description: "KondoRu é uma plataforma que visa modernizar a experiência de busca e gestão de imóveis residenciais e comerciais.",
};

export const viewport: Viewport = {
  themeColor: '#243441',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body className={`${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}
