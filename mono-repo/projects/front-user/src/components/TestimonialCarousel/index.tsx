import { SwiperSlide } from 'swiper/react';
import Carousel from '../Carousel';
import TestimonialCard from './TestimonialCard';
import { useHomePageData } from 'src/contexts/HomePageContext';

export default function TestimonialCarousel() {
  const { testimonials } = useHomePageData();

  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
