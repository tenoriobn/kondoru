import Link from 'next/link';
import styled from 'styled-components';
import links from './links.json';
import { IMenuList } from 'src/interfaces/IMenu';

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  a {
    color: ${({theme}) => theme.colors.white};
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default function MenuList() {
  return (
    <StyledMenuList>
      {links.map((link: IMenuList) => (
        <li key={link.id} >
          <Link className="menu-config" href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </StyledMenuList>
  );
}
