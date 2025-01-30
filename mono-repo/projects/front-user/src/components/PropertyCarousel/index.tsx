import { SwiperSlide } from 'swiper/react';
import { useHomePageData } from 'src/contexts/HomePageContext';
import Carousel from '../Carousel';
import PropertyCard from './PropertyCard';

export default function PropertyCarousel() {
  const { properties } = useHomePageData();

  return (
    <Carousel>
      {properties.map((property, index) => (
        <SwiperSlide key={index}>
          <PropertyCard property={property} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
