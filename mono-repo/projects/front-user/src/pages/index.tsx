import HomeScreen from 'features/Home';
import { HomePageProvider } from 'Home/HomePageProvider';
import { homePageData } from 'src/features/Home/data';
import { IHomeDataProps, IHomeData } from 'Home/homePage.types';

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
