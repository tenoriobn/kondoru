import styled from 'styled-components';
import horizontalPadding from 'src/styles/mixins/horizontalPadding';
import SocialMediaLinks from './SocialMediaLinks';
import NewsletterForm from './NewsletterForm';
import { useHomePageData } from 'Home/HomePageProvider';

const StyledFooter = styled.footer`
  display: grid;
  justify-content: center;

  background: ${({ theme }) => theme.colors['gradient-dark-slate']};
  ${horizontalPadding};

  padding-top: 6.25rem;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const StyledContainerFooter = styled.div`
  display: grid;
  align-items: center;
  row-gap: 2rem;
  margin-bottom: 6.25rem;

  max-width: 526px;

  @media (min-width: 768px) {
    margin-bottom: 8rem;
  }
`;

const StyledParagraph = styled.p`
  color:  ${({ theme }) => theme.colors['white']};
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  const { footer } = useHomePageData();
  
  return (
    <StyledFooter>
      <StyledContainerFooter>
        <StyledParagraph>
          {footer.title}
        </StyledParagraph>

        <NewsletterForm />

        <SocialMediaLinks />
      </StyledContainerFooter>

      <StyledParagraph>{footer.year} {footer.description}</StyledParagraph>
    </StyledFooter>
  );
}