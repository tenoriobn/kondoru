import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ReactNode } from 'react';
import { LayoutWrapper } from 'src/styles';

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
    background: ${({ theme }) => theme.colors['gray-50']};
    width: 1rem;
    height: 1rem;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors['dark-slate-84']};
  }
`;

export default function Carousel({ children }: { children: ReactNode }) {
  return (
    <LayoutWrapper>
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
        {children}
      </StyledSwiper>
    </LayoutWrapper>
  );
}
