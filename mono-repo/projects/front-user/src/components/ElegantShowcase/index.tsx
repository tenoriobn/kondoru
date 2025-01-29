import StyledLayoutWrapper from "src/styles/styledComponents/StyledLayoutWrapper";
import styled from "styled-components";
import ElegantShowCasePlayer from "./ElegantShowCasePlayer";

const StyledContainer = styled(StyledLayoutWrapper)`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(388px, 1fr));
  }
`;

const StyledTextContent = styled.div`
  display: grid;
  gap: 2rem;
`;

const StyledSubtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }

  @media (min-width: 936px) and (max-width: 1366px) {
    white-space: pre-line;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function ElegantShowcase() {
  return (
    <StyledContainer>
      <ElegantShowCasePlayer />

      <StyledTextContent>
        <StyledSubtitle>Viva a Elegância em {"\n"} Cada Detalhe</StyledSubtitle>
        <StyledParagraph>
          Apresentamos uma coleção única de imóveis com design inteligente, 
          acabamentos de alta qualidade e situados nas melhores áreas. 
          Eleve seu estilo de vida com o que há de mais sofisticado no mercado imobiliário.
        </StyledParagraph>
      </StyledTextContent>
    </StyledContainer>
  )
}
