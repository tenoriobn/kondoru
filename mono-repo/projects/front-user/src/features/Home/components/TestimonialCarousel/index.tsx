import { SwiperSlide } from 'swiper/react';
import { useHomePageData } from 'Home/HomePageProvider';
import Carousel from 'src/components/Carousel';
import TestimonialCard from './TestimonialCard';

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
