import styled from 'styled-components';
import { ITestimonialCardProps } from 'src/interfaces/homePage/data/ITestimonialCard';
import { StyledCardContainer, StyledCardTitle, StyledText } from 'src/styles/components/StyledCard';

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


export default function TestimonialCard({ testimonial }: ITestimonialCardProps) {
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
