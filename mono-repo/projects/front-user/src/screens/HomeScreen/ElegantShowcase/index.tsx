import StyledLayoutWrapper from 'src/styles/components/StyledLayoutWrapper';
import styled from 'styled-components';
import ElegantShowCasePlayer from './ElegantShowCasePlayer';
import { useHomePageData } from 'src/contexts/HomePageContext';

const StyledContainer = styled(StyledLayoutWrapper)`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  height: 100%;
  min-height: 496px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(388px, 1fr));
  }
`;

const StyledTextContent = styled.div`
  display: grid;
  gap: 2rem;
  letter-spacing: -1.25px;
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
  const { elegantShowcase } = useHomePageData();
  
  return (
    <StyledContainer>
      <ElegantShowCasePlayer />

      <StyledTextContent>
        <StyledSubtitle>{elegantShowcase.title}</StyledSubtitle>
        <StyledParagraph>
          {elegantShowcase.description}
        </StyledParagraph>
      </StyledTextContent>
    </StyledContainer>
  );
}
