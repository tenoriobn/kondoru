import styled from 'styled-components';
import Link from 'next/link';
import { ITestimonialCardProps } from 'src/interfaces/TestimonialCarousel/ITestimonialCard';

const StyledCardContainer = styled(Link)`
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  max-width: 401px;

  @media (min-width: 768px) {
    max-width: 376px;
  }
`;

const StyledCardImage = styled.img`
  border-radius: 100%;
  max-width: 120px;
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledCardName = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
`;

const StyledCardTestimony = styled.h4`
  color: ${({ theme }) => theme.colors['dark-slate-58']};
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 500;
  text-align: center;
`;


export default function TestimonialCard({ testimonial }: ITestimonialCardProps) {
  return (
    <StyledCardContainer href={testimonial.href}>
      <StyledCardImage src={testimonial.image} alt={testimonial.name} />

      <StyledCardName title={testimonial.name}>
        {testimonial.name}
      </StyledCardName>

      <StyledCardTestimony>
        {testimonial.testimony}
      </StyledCardTestimony>
    </StyledCardContainer>
  );
}
