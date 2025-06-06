import styled from 'styled-components';
import { useHomePageData } from 'Home/HomePageProvider';
import Filter from './Filter';
import { LayoutWrapper } from 'src/styles';

const Styled = {
  HeroSection: styled.div`
    background-image: url('/images/background-header.webp');
    background-size: cover;
    background-position: bottom;
  `,

  LayoutWrapper: styled(LayoutWrapper)`
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
  `,

  HeroContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    padding: 5.5rem 0;
  `,

  Title: styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(4rem, 18vw, 15.625rem);
    line-height: clamp(3rem, 16vw, 12rem);
    font-weight: 800;
  `,

  Slogan: styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(.5rem, 6.4vw, 2rem);
    font-weight: 400;
    text-align: center;
    white-space: pre-line;
  `,
};

export default function HeroSection() {
  const { heroSection } = useHomePageData();

  return (
    <Styled.HeroSection>
      <Styled.LayoutWrapper>
        <Styled.HeroContent>
          <Styled.Title rel="preload">{heroSection.title}</Styled.Title>
          <Styled.Slogan>{heroSection.slogan}</Styled.Slogan>
        </Styled.HeroContent>
        
        <Filter />
      </Styled.LayoutWrapper>
    </Styled.HeroSection>
  );
}
