import Header from 'src/components/Header';
import PropertyCarousel from './PropertyCarousel';
import ElegantShowcase from './ElegantShowcase';
import TestimonialCarousel from './TestimonialCarousel';
import Footer from 'src/components/Footer';
import { StyledMainContainer } from 'src/styles/components/StyledMain';

export default function HomeScreen() {
  return (
    <>    
      <Header />

      <StyledMainContainer>
        <PropertyCarousel />
        <ElegantShowcase />
        <TestimonialCarousel />
      </StyledMainContainer>

      <Footer />
    </>
  );
}
