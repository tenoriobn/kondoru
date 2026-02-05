import { SwiperSlide } from 'swiper/react';
import properties from './properties.json';
import Carousel from 'src/components/Carousel';
import PropertyCard from './PropertyCard';

export default function PropertyCarousel() {
  return (
    <section className="w-full max-w-6xl" aria-label="Lista de Imóveis">
      <Carousel>
        <ul role="list">
          {properties.map((property) => (
            <SwiperSlide key={property.id} tag="li">
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </ul>
      </Carousel>
    </section>
  );
}
