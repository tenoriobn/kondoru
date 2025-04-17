import styled from 'styled-components';
import StyledLayoutWrapper from 'src/styles/components/StyledLayoutWrapper';
import useResponsiveMenu from './useResponsiveMenu';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from './Logo';
import AccessButton from './AccessButton';
import MobileMenuIcon from 'public/icons/menu-hamburguer.svg';
import useScrollTrigger from './useScrollTrigger';

const StyledHeader = styled.header<{ $scrolled: Boolean }>`
  background-color: ${({ theme }) => theme.colors['dark-slate-800']};
  position: fixed;
  width: 100%;
  z-index: 99;

  ${({ $scrolled }) => 
    $scrolled && 
    `
      box-shadow: 0px 0px 24px 2px rgb(24 24 23 / 80%);
    `}
`;

const StyledContainerHeader = styled(StyledLayoutWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;

  .auth_button-desktop {
      display: none;
    }

  @media (min-width: 992px) {
    .auth_button-desktop {
      display: flex;
    }
  }
`;

const StyledMobileMenuIcon = styled(MobileMenuIcon)`
  display: block;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default function Header() {
  const { isMenuActive, setIsMenuActive, isMobile } = useResponsiveMenu();
  const { scrolled } = useScrollTrigger();

  return (
    <StyledHeader $scrolled={scrolled}>
      <StyledContainerHeader>
        <Logo />

        <StyledMobileMenuIcon onClick={() => setIsMenuActive(true)} />

        <ResponsiveMenu 
          $isMenuActive={isMenuActive} 
          $setIsMenuActive={setIsMenuActive} 
          $isMobile={isMobile} 
        />

        <AccessButton className="auth_button-desktop" />
      </StyledContainerHeader>
    </StyledHeader>
  );
}
