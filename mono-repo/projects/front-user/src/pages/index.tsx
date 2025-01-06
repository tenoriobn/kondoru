
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import links from 'components/Header/Navbar/MenuLink/links.json';
import { IHomePageData } from 'src/interfaces/IHomePageData';

export async function getStaticProps() {
  const homeData: IHomePageData = {
    menuLinks: links
  }

  return {
    props: { homeData },
  };
}

export default function HomePage({ homeData }: { homeData: IHomePageData }) {

  return (
    <div>
      <Header menuLinks={homeData.menuLinks} />
      <Footer />
    </div>
  );
}