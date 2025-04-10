import { useHomePageData } from 'src/contexts/HomePageContext';
import Filter from './Filter';
import styled from 'styled-components';
import StyledLayoutWrapper from 'src/styles/components/StyledLayoutWrapper';

const StyledHeroSection = styled.div`
  background-image: url('/images/background-header.webp');
  background-size: cover;
  background-position: center;
`;

const StyledHeroSectionContainer = styled(StyledLayoutWrapper)`
  display: grid;
  grid-template-rows: minmax(300px, 1fr) 344px;
  min-height: 100dvh;
  padding-top: 102px;
  padding-bottom: 6.25rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-rows: minmax(388px, 1fr) 248px;
    padding-bottom: 8rem;
  }

  @media (min-width: 992px) {
    grid-template-rows: minmax(540px, 1fr) 64px;
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 5.5rem 0;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(4rem, 18vw, 15.625rem);
  letter-spacing: -0.125rem;
  font-weight: 800;
  line-height: clamp(3rem, 17vw, 12rem);
`;

const StyledSlogan = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(.5rem, 6.4vw, 2rem);
  font-weight: 400;
  line-height: clamp(.5rem, 6.4vw, 2rem);
  text-align: center;
  white-space: pre-line;
`;

export default function HeroSection() {
  const { heroSection } = useHomePageData();

  return (
    <StyledHeroSection>
      <StyledHeroSectionContainer>
        <StyledHeroContent>
          <StyledTitle rel="preload">{heroSection.title}</StyledTitle>
          <StyledSlogan>{heroSection.slogan}</StyledSlogan>
        </StyledHeroContent>
        
        <Filter />
      </StyledHeroSectionContainer>
    </StyledHeroSection>
  );
}
