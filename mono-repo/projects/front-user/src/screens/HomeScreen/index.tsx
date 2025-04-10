import Header from './Header';
import HeroSection from './HeroSection';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import Footer from './Footer';
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
