import HeroSection from 'src/components/HeroSection';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import ContactCTA from './ContactCTA';
import PageContainer from 'src/components/PageContainer';

export default function Contacts() {
  return (
    <>
      <HeroSection
        backgroundImage="herosection-contacts-bg.webp"
        title="Contatos"
        subtitle={
          <>
            <span className="block">Tire suas dúvidas e</span>

            <span className="block">
              descubra as soluções <span className="whitespace-nowrap">ideais para você</span>
            </span>
          </>
        }
      >
        <ContactInfo />
      </HeroSection>

      <PageContainer>
        <ContactMap />
        <ContactCTA />
      </PageContainer>
    </>
  );
}
