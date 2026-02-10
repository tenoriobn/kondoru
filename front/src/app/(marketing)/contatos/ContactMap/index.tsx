export default function ContactMap() {
  return (
    <section aria-labelledby="contact-map-title" className="w-full max-w-6xl">
      <h2 id="contact-map-title" className="sr-only">
        Localização da Kondoru
      </h2>

      <figure>
        <iframe
          title="Mapa com a localização da Kondoru"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.028339187746!2d-46.66248242466996!3d-23.558132878801988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c1d5662789%3A0xe5a2e30e8d46c756!2sAv.%20Paulista%2C%202084%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e1!3m2!1spt-BR!2sbr!4v1770747033286!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-90 lg:h-123 rounded-3xl"
        />

        <figcaption className="font-semibold italic text-xl text-center mt-4">
          Atendimento presencial sob agendamento.
        </figcaption>
      </figure>
    </section>
  );
}
