import { SwiperSlide } from 'swiper/react';
import testimonials from './testimonials.json';
import Carousel from 'src/components/Carousel';
import TestimonialCard from './TestimonialCard';
import Section from 'src/components/Section';

export default function TestimonialCarousel() {
  return (
    <Section aria-label="Lista de Depoimentos">
      <Carousel>
        <ul role="list">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} tag="li">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </ul>
      </Carousel>
    </Section>
  );
}
