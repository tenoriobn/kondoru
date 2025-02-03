import { homePageData } from 'src/data/homePage/homePageData';
import { HomePageProvider } from 'src/contexts/HomePageContext';
import { IHomeDataProps, IHomeData } from 'src/interfaces/homePage/IHomePageData';
import HomeScreen from 'src/screens/HomeScreen';

export async function getStaticProps() {
  const year = new Date().getFullYear();

  const homeData: IHomeData = {
    ...homePageData,
    footer: { ...homePageData.footer, year },
  };

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: IHomeDataProps) {
  return (
    <HomePageProvider homeData={homeData}>
      <HomeScreen />
    </HomePageProvider>
  );
}
