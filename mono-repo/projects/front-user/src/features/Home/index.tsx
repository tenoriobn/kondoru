import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import PropertyCarousel from './sections/PropertyCarousel';
import ElegantShowcase from './sections/ElegantShowcase';
import TestimonialCarousel from './sections/TestimonialCarousel';
import Footer from './sections/Footer';
import { MainContent } from 'src/styles';

export default function HomeScreen() {
  return (
    <>    
      <Header />
      
      <main>
        <HeroSection />
        
        <MainContent>
          <PropertyCarousel />
          <ElegantShowcase />
          <TestimonialCarousel />
        </MainContent>
      </main>

      <Footer />
    </>
  );
}
