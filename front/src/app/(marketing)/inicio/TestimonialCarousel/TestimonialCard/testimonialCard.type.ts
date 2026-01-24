export interface TestimonialCard {
  id: string;
  href: string;
  name: string;
  image: string;
  testimony: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialCard;
}
