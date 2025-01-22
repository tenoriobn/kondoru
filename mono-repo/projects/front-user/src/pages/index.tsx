import Header from 'src/components/Header';
import links from 'src/data/homePage/header/links.json';
import dropdowns from 'src/data/homePage/header/dropdowns.json';
import heroSection from 'src/data/homePage/header/heroSection.json';
import { IHomePageStaticData } from 'src/interfaces/header/IHomePageStaticData';
import { HomePageProvider } from 'src/contexts/HomePageContext';

export async function getStaticProps() {
  const homeData: IHomePageStaticData = {
    menuLinks: links,
    dropdowns: dropdowns,
    heroSection: heroSection,
  };

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: { homeData: IHomePageStaticData }) {
  return (
    <HomePageProvider homeData={homeData}>
      <Header />
    </HomePageProvider>
  );
}