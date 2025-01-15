import styled from 'styled-components';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { Container } from 'src/styles/container';

const StyledHeader = styled.header`
  background-image: url('/images/background-header.png');
  background-size: cover;
  background-position: center;
`;

const StyledContainerHeader = styled(Container)`
  display: grid;
  grid-template-rows: auto 1fr 344px;
  gap: 6.25rem;
  min-height: 100vh;
  padding-bottom: 6.25rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr 248px;
    gap: 8rem;
    padding-bottom: 8rem;
  }

  @media (min-width: 992px) {
    grid-template-rows: auto 1fr 64px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainerHeader>
        <Navbar /> 
        <HeroSection />
      </StyledContainerHeader>
    </StyledHeader>
  );
}
