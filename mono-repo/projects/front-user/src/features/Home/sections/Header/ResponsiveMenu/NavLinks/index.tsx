import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { useHomePageData } from 'Home/HomePageProvider';
import { MenuMobile } from 'src/features/Home/types/menu.types';

const Styled = {
  MenuLinksContainer: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  `,

  MenuLinks: styled(Link)`
    color: ${({theme}) => theme.colors['gray-400']};
    font-size: 1.25rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.transitions.smoothTransition};

    &.active {
      color: ${({theme}) => theme.colors.white}!important;
    }

    &:hover {
      color: ${({theme}) => theme.colors['white-80']};
    }

    &:active {
      color: ${({theme}) => theme.colors['white']};
    }
  `,
};
export default function MenuLinks({ $setIsMenuActive }: MenuMobile) {
  const { menuLinks } = useHomePageData();
  const pathname = usePathname();

  return (
    <Styled.MenuLinksContainer>
      {menuLinks.map((link) => (
        <li key={link.id} >
          <Styled.MenuLinks 
            href={link.href}
            className={`${pathname === link.href ? 'active' : ''}`} 
            onClick={() => $setIsMenuActive?.(false)}
          >
            {link.text}
          </Styled.MenuLinks>
        </li>
      ))}
    </Styled.MenuLinksContainer>
  );
}
