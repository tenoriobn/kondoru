import Header from 'src/components/Header';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import Footer from 'src/components/Footer';
import { StyledMainContent } from 'src/styles/components/StyledMain';
import NewHeader from 'src/components/NewHeader';
import HeroSection from 'src/components/Header/HeroSection';

export default function HomeScreen() {
  return (
    <>    
      <NewHeader />
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
