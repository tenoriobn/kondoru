import styled from 'styled-components';
import Image from 'next/image';
import MenuIcon from 'public/icons/menu-hamburguer.svg';
import CloseIcon from 'public/icons/close.svg';
import MenuLink from './MenuLink';
import { Container } from 'src/styles/container';
import Button from 'components/Button';
import { IMenuMobile } from 'src/interfaces/IMenu';
import useResponsiveMenu from 'src/hooks/Header/useResponsiveMenu';

const MobileMenuButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 992px) {
    display: none;
  }
`;

const MenuContainer = styled.div<IMenuMobile>`
  background-image: linear-gradient(rgb(35, 50, 62, .8), rgb(35, 50, 62, .8)), 
  url('/images/background-header.png');
  background-size: cover;
  background-position: center;
  background-color: ${({theme}) => theme.colors['dark-slate-900']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  position: fixed;
  left: ${({ $isMenuActive: isActive }) => (isActive ? '0' : '-100%')};
  top: 0;
  transition: left .3s ease-in-out;
  padding: 2rem 1.5rem;
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  @media (min-width: 992px) {
    background: none;
    position: relative;
    display: flex;
    flex-direction: row;
    left: 0%;
    padding: 0;
    height: 100%;
  }
`;

const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;

    @media (min-width: 992px) {
      display: none;
    }
`;

const ButtonsAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default function Navbar() {
  const { isMenuActive, setIsMenuActive } = useResponsiveMenu(992);

  return (
    <nav>
      <Container> 
        <MobileMenuButtonContainer> 
          <Button onClick={() => setIsMenuActive(true)}>
            <Image src={MenuIcon} alt="Menu button" />
          </Button>
        </MobileMenuButtonContainer>

        <MenuContainer $isMenuActive={isMenuActive}>
          <CloseButtonContainer>
            <Button onClick={() => setIsMenuActive(false)}>
              <Image src={CloseIcon} alt="Close Menu button" />
            </Button>
          </CloseButtonContainer>

          <MenuLink />

          <ButtonsAuthContainer> 
            <Button 
              $color="gray-400"
              $hoverColor="white-80"
              $activeColor="white"
            >
              Login
            </Button>

            <Button
              $backgroundColor="white"
              $color="dark-slate-900"
              $borderRadius="rounded-48"
              $padding="0 2rem"
              $height="52px"
              $hoverBackgroundColor="white-80"
              $activeBackgroundColor="white"
            >
              Cadastre-se
            </Button>
          </ButtonsAuthContainer>
        </MenuContainer>
      </Container>
    </nav>
  );
}
