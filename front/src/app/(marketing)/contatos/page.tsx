import HeroSection from 'src/components/HeroSection';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import ContactCTA from './ContactCTA';

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

      <div className="bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 mb-25 gap-25 md:mx-16 md:mb-32 md:gap-32">
        <ContactMap />
        <ContactCTA />
      </div>
    </>
  );
}
