import styled from 'styled-components';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StyledLayoutWrapper from 'src/styles/components/StyledLayoutWrapper';
import AuthForm from './AuthForm';

const StyledHeader = styled.header`
  background-image: url('/images/background-header.webp');
  background-size: cover;
  background-position: center;
`;

const StyledContainerHeader = styled(StyledLayoutWrapper)`
  display: grid;
  grid-template-rows: auto 1fr 344px;
  gap: 6.25rem;
  min-height: 100dvh;
  padding-top: 2rem;
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

        <AuthForm />
      </StyledContainerHeader>
    </StyledHeader>
  );
}
