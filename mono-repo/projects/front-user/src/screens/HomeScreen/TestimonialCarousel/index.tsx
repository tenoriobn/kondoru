import { SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { useHomePageData } from 'src/contexts/HomePageContext';
import Carousel from 'src/components/Carousel';

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
