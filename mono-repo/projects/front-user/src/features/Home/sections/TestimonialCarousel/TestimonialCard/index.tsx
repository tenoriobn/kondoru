import styled from 'styled-components';
import { TestimonialCardProps } from 'src/features/Home/types/testimonialCard.type';
import { CardContainer, CardText, CardTitle } from 'src/styles';

const Styled = {
  TestimonialCardContainer: styled(CardContainer)`
    align-items: center;
    justify-items: center;
  `,

  CardImage: styled.img`
    border-radius: 100%;
    max-width: 120px;
    width: 100%;
    margin-bottom: 1rem;
  `,

  CardTestimony: styled(CardText)`
    text-align: center;
  `,
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Styled.TestimonialCardContainer href={testimonial.href}>
      <Styled.CardImage src={testimonial.image} alt={testimonial.name} />

      <CardTitle title={testimonial.name}>
        {testimonial.name}
      </CardTitle>

      <Styled.CardTestimony>
        {testimonial.testimony}
      </Styled.CardTestimony>
    </Styled.TestimonialCardContainer>
  );
}
