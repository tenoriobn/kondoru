'use client';
import { useRouter } from 'next/navigation';
import Logo from 'src/components/Logo';
import ArrowLeftIcon from 'public/icons/arrow-left.svg';
import type { AuthLayoutProps } from './authLayout.type';

export default function AuthLayout({ children, isSubmitting }: AuthLayoutProps) {
  const router = useRouter();

  return (
    <main className="bg-[url(/images/background-header.webp)] bg-cover bg-top bg-fixed grid place-items-center min-h-dvh p-4 xs:p-6 md:p-16">
      <div className="bg-dark-slate-800 rounded-3xl border border-[rgba(189,189,189,0.16)] flex flex-col items-center justify-center gap-16 max-w-175 w-full p-4 sm:p-6 md:p-8">
        <header className="flex items-center justify-between gap-6 w-full">
          <button
            disabled={isSubmitting}
            onClick={() => router.push('/')}
            className={`
              flex items-center gap-2 bg-transparent text-gray-300/60 text-xl font-medium transition duration-300 ease-in-out
              ${isSubmitting ? 'text-gray-300/60 cursor-not-allowed' : 'cursor-pointer hover:text-white-80 active:text-white'}
            `}
          >
            <ArrowLeftIcon /> Voltar
          </button>

          <Logo />
        </header>

        <section className="grid gap-12 w-full">{children}</section>
      </div>
    </main>
  );
}
