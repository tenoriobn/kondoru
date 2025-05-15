import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import PropertyCarousel from './sections/PropertyCarousel';
import ElegantShowcase from './sections/ElegantShowcase';
import TestimonialCarousel from './sections/TestimonialCarousel';
import Footer from './sections/Footer';
import { StyledMainContent } from 'src/styles/ui/StyledMain';

export default function HomeScreen() {
  return (
    <>    
      <Header />
      
      <main>
        <HeroSection />
        
        <StyledMainContent>
          <PropertyCarousel />
          <ElegantShowcase />
          <TestimonialCarousel />
        </StyledMainContent>
      </main>

      <Footer />
    </>
  );
}
