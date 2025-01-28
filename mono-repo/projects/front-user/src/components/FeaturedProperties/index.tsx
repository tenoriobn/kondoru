import styled from 'styled-components';
import StyledLayoutWrapper from 'src/styles/styledComponents/StyledLayoutWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PropertyCard from './PropertyCard';
import { useHomePageData } from 'src/contexts/HomePageContext';

const StyledSwiper = styled(Swiper)`
  .swiper-wrapper {
    margin-bottom: 2rem;
  }

  .swiper-pagination {
    position: relative;
    top: 0;
  }

  .swiper-pagination-bullet {
    opacity: inherit;
    background: ${({ theme }) => theme.colors['gray-400']};
    width: 1rem;
    height: 1rem;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors['dark-slate-800']};
  }
`;

export default function FeaturedProperties() {
  const { properties } = useHomePageData();

  return (
    <StyledLayoutWrapper>
      <StyledSwiper 
        slidesPerView={1}
        spaceBetween={32}
        pagination={{ clickable: true }}
        breakpoints={{
          450: { slidesPerView: 2 },
          912: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledLayoutWrapper>
  );
}