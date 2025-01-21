import styled from 'styled-components';
import MenuIcon from 'public/icons/menu-hamburguer.svg';
import Button from 'components/Button';
import useResponsiveMenu from 'src/hooks/Header/useResponsiveMenu';
import Menu from './Menu';

const MobileMenuButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default function Navbar() {
  const { isMenuActive, setIsMenuActive, isMobile } = useResponsiveMenu(992);

  return (
    <nav>
      {isMobile &&          
        <MobileMenuButtonContainer> 
          <Button onClick={() => setIsMenuActive(true)}>
            <MenuIcon width={30} height={24} />
          </Button>
        </MobileMenuButtonContainer>
      }

      <Menu $isMenuActive={isMenuActive} $setIsMenuActive={setIsMenuActive} $isMobile={isMobile} />
    </nav>
  );
}
