import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PropertyCarousel from './components/PropertyCarousel';
import ElegantShowcase from './components/ElegantShowcase';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';
import { StyledMainContent } from 'src/styles/components/StyledMain';

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
