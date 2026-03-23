import Link from 'next/link';
import ArrowLeftIcon from 'public/icons/arrow-left.svg';
import Section from 'src/components/Section';

export default function NotFound() {
  return (
    <main className="relative flex items-center justify-center min-h-dvh">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(/images/herosection-404-bg.webp)` }}
      />

      <Section
        aria-labelledby="hero-title"
        className="relative grid mx-4 xs:mx-6 md:mx-16 lgx:px-0 lgx:mx-16 pt-25.5 pb-25 md:pb-32"
      >
        <header className="flex flex-col items-center justify-center gap-8 py-22 text-center">
          <h1
            id="hero-title"
            className="text-white font-extrabold text-[clamp(8rem,18vw,15.625rem)] leading-[clamp(3rem,16vw,12rem)]"
          >
            404
          </h1>

          <p
            role="alert"
            className="text-white font-normal text-[clamp(.5rem,6.4vw,2rem)] leading-[clamp(.8rem,8vw,2.5rem)] text-center"
          >
            <span className="block max-md:max-w-114.25">
              Página não encontrada {''}
              <br className="hidden md:block" />o conteúdo pode ter sido {''}
              <span className="whitespace-nowrap">removido ou não existe</span>
            </span>
          </p>

          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className="cursor-pointer w-full max-w-max flex items-center justify-center gap-2 px-8 py-4 bg-dark-slate-800 text-white rounded-full font-semibold text-base md:text-xl transition duration-300 ease-in-out hover:bg-gray-500 active:bg-gray-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <ArrowLeftIcon className="stroke-2" aria-hidden="true" />
            Voltar para o início
          </Link>
        </header>
      </Section>
    </main>
  );
}
