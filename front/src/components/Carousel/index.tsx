import type { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper-overrides.css';

export default function Carousel({ children }: { children: ReactNode }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        450: { slidesPerView: 2 },
        912: { slidesPerView: 3 },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
