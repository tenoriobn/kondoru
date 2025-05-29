import styled from 'styled-components';
import StyledLayoutWrapper from 'src/styles/ui/StyledLayoutWrapper';
import useResponsiveMenu from './useResponsiveMenu';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from 'components/Logo';
import AccessDropdown from './AccessDropdown';
import MobileMenuIcon from 'public/icons/menu-hamburguer.svg';

const Styled = {
  Header: styled.header`
    background-color: ${({ theme }) => theme.colors['dark-slate-800']};
    position: fixed;
    width: 100%;
    z-index: 99;
  `,

  ContainerHeader: styled(StyledLayoutWrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    position: relative;

    .access-button__desktop {
        display: none;
      }

    @media (min-width: 992px) {
      .access-button__desktop {
        display: flex;
      }
    }
  `,

  MobileMenuIcon: styled(MobileMenuIcon)`
    display: block;

    @media (min-width: 992px) {
      display: none;
    }
  `,
};

export default function Header() {
  const { isMenuActive, setIsMenuActive, isMobile } = useResponsiveMenu();

  return (
    <Styled.Header>
      <Styled.ContainerHeader>
        <Logo />

        <Styled.MobileMenuIcon onClick={() => setIsMenuActive(true)} />

        <ResponsiveMenu 
          isMenuActive={isMenuActive} 
          setIsMenuActive={setIsMenuActive} 
          isMobile={isMobile} 
        />

        {!isMobile && 
          <AccessDropdown 
            className="access-button__desktop" 
          />
        }
      </Styled.ContainerHeader>
    </Styled.Header>
  );
}
