import type { HeroSectionProps } from './herosection.type';

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  children,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className={`bg-[url(/images/${backgroundImage})] bg-cover bg-top flex items-center justify-center`}
    >
      <div className="grid grid-rows-[minmax(300px,1fr)_344px] min-h-dvh pt-25.5 pb-25 w-full max-w-6xl mx-4 xs:mx-6 md:grid-rows-[minmax(388px,1fr)_248px] md:mx-16 lgx:px-0 lgx:mx-16 md:pb-32 lgx:grid-rows-[minmax(540px,1fr)_64px]">
        <header className="flex flex-col justify-center items-center gap-8 py-22">
          <h1
            id="hero-title"
            className="text-white font-extrabold text-[clamp(4rem,18vw,15.625rem)] leading-[clamp(3rem,16vw,12rem)]"
          >
            {title}
          </h1>

          <p className="text-white font-normal text-[clamp(.5rem,6.4vw,2rem)] leading-[clamp(.8rem,8vw,2.5rem)] text-center whitespace-pre-line">
            {subtitle}
          </p>
        </header>

        {children}
      </div>
    </section>
  );
}
