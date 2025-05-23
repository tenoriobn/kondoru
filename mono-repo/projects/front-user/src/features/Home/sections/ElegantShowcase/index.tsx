import styled from 'styled-components';
import { useHomePageData } from 'Home/HomePageProvider';
import ElegantShowCasePlayer from './ElegantShowCasePlayer';
import StyledLayoutWrapper from 'src/styles/ui/StyledLayoutWrapper';

const Styled = {
  Container: styled(StyledLayoutWrapper)`
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 2rem;
    height: 100%;
    min-height: 496px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(388px, 1fr));
    }
  `,

  TextContent: styled.div`
    display: grid;
    gap: 2rem;
  `,

  Subtitle: styled.h2`
    justify-self: center;
    font-size: 1.5rem;
    font-weight: 950;
    text-transform: uppercase;
    text-align: center;
    width: 100%;

    @media (max-width: 521px) {
      max-width: 328px;
    }
  `,

  Paragraph: styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
  `,
};

export default function ElegantShowcase() {
  const { elegantShowcase } = useHomePageData();
  
  return (
    <Styled.Container>
      <ElegantShowCasePlayer />

      <Styled.TextContent>
        <Styled.Subtitle>{elegantShowcase.title}</Styled.Subtitle>
        <Styled.Paragraph>
          {elegantShowcase.description}
        </Styled.Paragraph>
      </Styled.TextContent>
    </Styled.Container>
  );
}
