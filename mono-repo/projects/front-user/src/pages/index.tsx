import Header from 'src/components/Header';
import menuLinks from 'src/data/homePage/header/menuLinks.json';
import dropdowns from 'src/data/homePage/header/dropdowns.json';
import heroSection from 'src/data/homePage/header/heroSection.json';
import properties from 'src/data/homePage/featuredProperties/properties.json';
import testimonials from 'src/data/homePage/testimonials/testimonials.json';
import { IHomePageStaticData } from 'src/interfaces/header/IHomePageStaticData';
import { HomePageProvider } from 'src/contexts/HomePageContext';
import styled from 'styled-components';
import ElegantShowcase from 'src/components/ElegantShowcase';
import PropertyCarousel from 'src/components/PropertyCarousel';
import TestimonialCarousel from 'src/components/TestimonialCarousel';
import Footer from 'src/components/Footer';

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
  padding-bottom: 6.25rem;

  @media (min-width: 768px) {
    gap: 8rem;
    padding-bottom: 8rem;
  }
`;

export async function getStaticProps() {
  const homeData: IHomePageStaticData = {
    menuLinks,
    dropdowns,
    heroSection,
    properties,
    testimonials,
  };

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: { homeData: IHomePageStaticData }) {
  return (
    <HomePageProvider homeData={homeData}>
      <Header />

      <StyledMainContainer>
        <PropertyCarousel />
        <ElegantShowcase />
        <TestimonialCarousel />
      </StyledMainContainer>

      <Footer />
    </HomePageProvider>
  );
}