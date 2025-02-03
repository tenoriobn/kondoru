import { useHomePageData } from 'src/contexts/HomePageContext';
import { SwiperSlide } from 'swiper/react';
import PropertyCard from './PropertyCard';
import Carousel from 'src/components/Carousel';

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
