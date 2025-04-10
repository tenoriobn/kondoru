import horizontalPadding from 'src/styles/mixins/horizontalPadding';
import styled from 'styled-components';
import MenuCloseIcon from 'public/icons/close.svg';
import { IMenuMobile } from 'src/interfaces/homePage/data/IMenu';
import Logo from '../Logo';
import AccessButton from '../AccessButton';
import MenuLinks from './NavLinks';

const StyledResponsiveMenu = styled.nav<IMenuMobile>`
  @media (max-width: 991px) {
    background-image: ${({ theme }) => theme.colors['gradient-dark-slate-80']}, 
    url('/images/background-header.webp');
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors['dark-slate-900']};

    display: ${({ $isMenuActive }) => ($isMenuActive ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;

    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    min-height: 100dvh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    
    z-index: 99;

    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    ${horizontalPadding}

    .auth_button-mobile {
      display: flex;
    }
  }
`;

const StyledMobileMenuOpenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledMenuCloseIcon = styled(MenuCloseIcon)` 
  width: 24px;
  height: 24px;

  g {
    stroke: ${({ theme }) => theme.colors['white']};
  }
`;

export default function ResponsiveMenu({ $isMenuActive, $setIsMenuActive, $isMobile }: IMenuMobile) {

  return (
    <StyledResponsiveMenu $isMenuActive={$isMenuActive}>
      {$isMenuActive &&
        <StyledMobileMenuOpenHeader>
          <Logo />

          <StyledMenuCloseIcon onClick={() => $setIsMenuActive && $setIsMenuActive(false)} />
        </StyledMobileMenuOpenHeader>
      }

      <MenuLinks $setIsMenuActive={$setIsMenuActive && $setIsMenuActive} />

      {$isMobile && 
        <AccessButton 
          onClick={() => $setIsMenuActive && $setIsMenuActive(false)} 
        />
      }
    </StyledResponsiveMenu>
  );
}
