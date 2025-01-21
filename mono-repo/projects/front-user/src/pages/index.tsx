import Header from 'src/components/Header';
import links from 'src/data/links.json';
import dropdowns from 'src/data/dropdowns.json';
import heroSection from 'src/data/heroSection.json';
import { IHomePageData } from 'src/interfaces/IHomePageData';
import { HomePageProvider } from 'src/contexts/HomePageContext';

export async function getStaticProps() {
  const homeData: IHomePageData = {
    menuLinks: links,
    dropdowns: dropdowns,
    heroSection: heroSection,
  };

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: { homeData: IHomePageData }) {
  return (
    <HomePageProvider homeData={homeData}>
      <Header />
    </HomePageProvider>
  );
}