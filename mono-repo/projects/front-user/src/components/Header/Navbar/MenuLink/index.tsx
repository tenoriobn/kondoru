import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { transition } from 'src/styles/transitions';
import { useHomePageData } from 'src/context/HomePageContext';

const StyledMenuLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const StyledMenuLinks = styled(Link)`
    color: ${({theme}) => theme.colors['gray-400']};
    font-size: 1.5rem;
    ${transition};

    &.active {
      color: ${({theme}) => theme.colors.white};
    }

    &:hover {
      color: ${({theme}) => theme.colors['white-80']};
    }

    &:active {
      color: ${({theme}) => theme.colors['white']};
    }
`;

export default function MenuLink() {
  const { menuLinks } = useHomePageData();
  const pathname = usePathname();

  return (
    <StyledMenuLinkContainer>
      {menuLinks.map((link) => (
        <li key={link.id} >
          <StyledMenuLinks 
            href={link.href}
            className={`${pathname === link.href ? 'active' : ''}`} 
            >
            {link.text}
          </StyledMenuLinks>
        </li>
      ))}
    </StyledMenuLinkContainer>
  );
}
