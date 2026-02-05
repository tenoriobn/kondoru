import { SwiperSlide } from 'swiper/react';
import testimonials from './testimonials.json';
import Carousel from 'src/components/Carousel';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel() {
  return (
    <section className="w-full max-w-6xl" aria-label="Lista de Depoimentos">
      <Carousel>
        <ul role="list">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} tag="li">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </ul>
      </Carousel>
    </section>
  );
}
