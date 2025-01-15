import { useHomePageData } from 'src/contexts/HomePageContext';
import Filter from './Filter';
import styled from 'styled-components';

const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(4rem, 18vw, 15.625rem);
  letter-spacing: -0.125rem;
  font-weight: 800;
  line-height: clamp(3rem, 17vw, 12rem);
`;

const StyledSlogan = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(.5rem, 6.4vw, 2rem);
  font-weight: 400;
  line-height: clamp(.5rem, 6.4vw, 2rem);
  text-align: center;
`;

export default function HeroSection() {
  const { heroSection } = useHomePageData();

  return (
    <>
      <StyledHeroContent>
        <StyledTitle rel="preload">{heroSection.titulo}</StyledTitle>
        <StyledSlogan>Viva o melhor da vida<br /> no lugar certo</StyledSlogan>
      </StyledHeroContent>
      
      <Filter />
    </>
  );
}
