import HeroSection from 'src/components/HeroSection';
import ContactInfo from './ContactInfo';

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
    </>
  );
}
