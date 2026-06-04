'use client';
import { SwiperSlide } from 'swiper/react';
import Carousel from 'src/components/Carousel';
import PropertyCard from './PropertyCard';
import Section from 'src/components/Section';
import { usePropertiesSearch } from '../../imoveis/PropertiesContent/usePropertiesSearch';
import PropertyCarouselSkeleton from './PropertyCarouselSkeleton';

export default function PropertyCarousel() {
  const search = usePropertiesSearch();
  const properties = search.properties;

  if (search.isLoading) {
    return (
      <Section aria-label="Lista de Imóveis">
        <Carousel>
          <ul role="list">
            <PropertyCarouselSkeleton />
          </ul>
        </Carousel>
      </Section>
    );
  }

  return (
    <Section aria-label="Lista de Imóveis">
      <Carousel>
        <ul role="list">
          {properties.map((property) => (
            <SwiperSlide key={property.id} tag="li">
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </ul>
      </Carousel>
    </Section>
  );
}
