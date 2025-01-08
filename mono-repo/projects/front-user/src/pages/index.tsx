
import Header from 'src/components/Header';
import links from 'components/Header/Navbar/MenuLink/links.json';
import { IHomePageData } from 'src/interfaces/IHomePageData';
import { HomePageProvider } from 'src/contexts/HomePageContext';

export async function getStaticProps() {
  const homeData: IHomePageData = {
    menuLinks: links,
  };

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: { homeData: IHomePageData }) {
  return (
    <HomePageProvider homeData={homeData}>
      <Header />
      <p>testando</p>
    </HomePageProvider>
  );
}