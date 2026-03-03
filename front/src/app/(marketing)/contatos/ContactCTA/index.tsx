import { SectionTitle } from 'src/components/SectionTitle';
import ContactForm from './ContactForm';
import SocialContactIcons from './SocialContactIcons';
import { SectionText } from 'src/components/SectionText';

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="grid place-items-center gap-8 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl"
    >
      <div className="max-w-145">
        <SectionTitle id="contact-cta-title">
          Estamos prontos <span className="whitespace-nowrap">para ouvir você</span>
        </SectionTitle>

        <SectionText className="mt-4">
          Entre em contato conosco e descubra como podemos ajudar você a viver o melhor da vida, no
          lugar certo.
        </SectionText>

        <SocialContactIcons />
      </div>

      <ContactForm />
    </section>
  );
}
