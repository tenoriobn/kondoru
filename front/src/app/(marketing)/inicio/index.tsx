import Footer from './Footer';
import Header from './Header';
import PrimaryContent from './PrimaryContent';
import SecondContent from './SecondContent';

export default function Home() {
  return (
    <div>
      <h2>Pagina Inicial</h2>
      <Header />
      <PrimaryContent />
      <SecondContent />
      <Footer />
    </div>
  );
}
