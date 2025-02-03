import styled from 'styled-components';
import horizontalPadding from 'src/styles/mixins/horizontalPadding';
import SocialMediaLinks from './SocialMediaLinks';
import NewsletterForm from './NewsletterForm';

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
  letter-spacing: -0.0781rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContainerFooter>
        <StyledParagraph>
          Inscreva-se para receber as melhores oportunidades 
          e tendências no setor imobiliário direto no seu e-mail!
        </StyledParagraph>

        <NewsletterForm />

        <SocialMediaLinks />
      </StyledContainerFooter>

      <StyledParagraph>{ano} © Todos os direitos reservados.</StyledParagraph>
    </StyledFooter>
  );
}