import ContactForm from './ContactForm';
import SocialContactIcons from './SocialContactIcons';

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="grid place-items-center gap-8 md:grid-cols-[repeat(auto-fit,minmax(388px,1fr))] w-full max-w-6xl"
    >
      <div className="max-w-145">
        <h2
          id="contact-cta-title"
          className="w-full text-center text-[1.5rem] font-black text-dark-slate-900 uppercase"
        >
          Estamos prontos <span className="whitespace-nowrap">para ouvir você</span>
        </h2>

        <p className="text-xl font-medium text-center text-dark-slate-84 mt-4">
          Entre em contato conosco e descubra como podemos ajudar você a viver o melhor da vida, no
          lugar certo.
        </p>

        <SocialContactIcons />
      </div>

      <ContactForm />
    </section>
  );
}
