import styled from 'styled-components';
import { TestimonialCardProps } from 'src/features/Home/types/testimonialCard.type';
import { StyledCardContainer, StyledCardTitle, StyledText } from 'src/styles/ui/StyledCard';

const StyledTestimonialCardContainer = styled(StyledCardContainer)`
  align-items: center;
  justify-items: center;
`;

const StyledCardImage = styled.img`
  border-radius: 100%;
  max-width: 120px;
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledCardTestimony = styled(StyledText)`
  text-align: center;
`;


export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <StyledTestimonialCardContainer href={testimonial.href}>
      <StyledCardImage src={testimonial.image} alt={testimonial.name} />

      <StyledCardTitle title={testimonial.name}>
        {testimonial.name}
      </StyledCardTitle>

      <StyledCardTestimony>
        {testimonial.testimony}
      </StyledCardTestimony>
    </StyledTestimonialCardContainer>
  );
}
