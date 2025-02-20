import styled from 'styled-components';
import MenuIcon from 'public/icons/menu-hamburguer.svg';
import Button from 'components/Button';
import useResponsiveMenu from 'src/hooks/useHeader/useResponsiveMenu';
import Menu from './Menu';

const MobileMenuButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  width: 30px;
  height: 24px;
`;

export default function Navbar() {
  const { isMenuActive, setIsMenuActive, isMobile } = useResponsiveMenu();

  return (
    <nav>
      {isMobile &&          
        <MobileMenuButtonContainer> 
          <Button onClick={() => setIsMenuActive(true)}>
            <StyledMenuIcon />
          </Button>
        </MobileMenuButtonContainer>
      }

      <Menu $isMenuActive={isMenuActive} $setIsMenuActive={setIsMenuActive} $isMobile={isMobile} />
    </nav>
  );
}
