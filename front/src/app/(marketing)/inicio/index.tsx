import Header from './Header';
import HeroSection from './HeroSection';
import PropertyCarousel from './PropertyCarousel';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <div className="bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 pb-25 gap-25 md:mx-16 md:pb-32 md:gap-32">
          <PropertyCarousel />
        </div>
      </main>
    </>
  );
}
