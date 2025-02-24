import styled from 'styled-components';
import CloseIcon from 'public/icons/close.svg';
import Button from 'src/components/Button';
import MenuLinks from './MenuLinks';
import { useSetRecoilState } from 'recoil';
import { stateActiveAuthForm } from 'src/store/atom';
import { IMenuMobile } from 'src/interfaces/homePage/data/IMenu';
import horizontalPadding from 'src/styles/mixins/horizontalPadding';

const MenuContainer = styled.div<IMenuMobile>`
  background-image: ${({theme}) => theme.colors['gradient-dark-slate-80']}, 
  url('/images/background-header.webp');
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
  transition: ${({ theme }) => theme.transitions.smoothTransition};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 99;

  padding: 2rem 0;
  ${horizontalPadding}

  @media (min-width: 992px) {
    background: none;
    position: relative;
    display: flex;
    flex-direction: row;
    left: 0%;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: inherit;
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

const StyledCloseIcon = styled(CloseIcon)` 
  width: 24px;
  height: 24px;

  g {
    stroke: ${({ theme }) => theme.colors['white']};
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

export default function Menu({ $isMenuActive, $setIsMenuActive, $isMobile }: IMenuMobile) {
  const setActiveAuthForm = useSetRecoilState(stateActiveAuthForm);

  return (
    <MenuContainer $isMenuActive={$isMenuActive}>
      {$isMobile &&     
        <CloseButtonContainer>
          <Button 
            onClick={() => $setIsMenuActive && $setIsMenuActive(false)}
          >
            <StyledCloseIcon />
          </Button>
        </CloseButtonContainer>
      }

      <MenuLinks $setIsMenuActive={$setIsMenuActive} />

      <ButtonsAuthContainer> 
        <Button 
          $color="gray-400"
          $hoverColor="white-80"
          $activeColor="white"
          onClick={() => setActiveAuthForm('login')}
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
          onClick={() => setActiveAuthForm('register')}
        >
          Cadastre-se
        </Button>
      </ButtonsAuthContainer>
    </MenuContainer>
  );
}
