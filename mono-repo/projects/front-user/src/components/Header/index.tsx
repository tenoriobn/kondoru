import styled from 'styled-components';
import Navbar from './Navbar';
import { IHomePageData } from 'src/interfaces/IHomePageData';
import { IMenuLink } from 'src/interfaces/IMenu';

const StyledContainerHeader = styled.header`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${({theme}) => theme.colors.zinc - 950};
  background-image: url('/images/background-header.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export default function Header({ menuLinks }: { menuLinks: IMenuLink[] }) {
  return (
    <StyledContainerHeader>
      <Navbar menuLinks={menuLinks} /> 
      <p>Olá</p>
    </StyledContainerHeader>
  );
}
