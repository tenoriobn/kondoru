import horizontalPadding from 'src/styles/mixins/horizontalPadding';
import styled from 'styled-components';
import MenuCloseIcon from 'public/icons/close.svg';
import { ResponsiveMenuProps } from 'src/features/Home/sections/Header/ResponsiveMenu/responsiveMenu.type';
import Logo from '../../../../../components/Logo';
import AccessDropdown from '../AccessDropdown';
import MenuLinks from './NavLinks';

const Styled = {
  ResponsiveMenu: styled.nav<{ $isMenuActive?: boolean }>`
    @media (max-width: 991px) {
      background-image: ${({ theme }) => theme.colors['gradient-dark-slate-80']}, 
      url('/images/background-header.webp');
      background-size: cover;
      background-position: center;
      background-color: ${({ theme }) => theme.colors['dark-slate-900']};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 6rem;

      position: fixed;
      left: ${({ $isMenuActive }) => ($isMenuActive ? '0' : '-100%')};
      top: 0;

      width: 100%;
      height: 100%;
      min-height: 100dvh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;

      transition: ${({ theme }) => theme.transitions.smoothTransition};
      
      z-index: 99;

      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      ${horizontalPadding}
    }
  `,

  MobileMenuOpenHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  MenuCloseIcon: styled(MenuCloseIcon)` 
    g {
      stroke: ${({ theme }) => theme.colors['white']};
    }
  `,
};

export default function ResponsiveMenu({ isMenuActive, setIsMenuActive, isMobile }: ResponsiveMenuProps) {
  return (
    <Styled.ResponsiveMenu $isMenuActive={isMenuActive}>
      {isMobile &&
        <Styled.MobileMenuOpenHeader>
          <Logo />

          <Styled.MenuCloseIcon onClick={() => setIsMenuActive && setIsMenuActive(false)} />
        </Styled.MobileMenuOpenHeader>
      }

      <MenuLinks setIsMenuActive={setIsMenuActive} />

      {isMobile && 
        <AccessDropdown />
      }
    </Styled.ResponsiveMenu>
  );
}
