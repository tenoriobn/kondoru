import { ElegantShowCase } from './types/elegantShowcase.types';
import { PropertyCard } from './types/propertyCard.types';
import { Footer } from './types/footer.types';
import { TestimonialCard } from './types/testimonialCard.types';
import { DropdownProps } from './types/dropdown.types';
import { IMenuLink } from './types/menu.types';
import { HeroSection } from './types/heroSection.types';

export interface IHomeData {
  menuLinks: IMenuLink[];
  dropdowns: DropdownProps[];
  heroSection: HeroSection;
  properties: PropertyCard[];
  testimonials: TestimonialCard[];
  elegantShowcase: ElegantShowCase;
  footer: Footer;
}

export interface IHomeDataProps {
  homeData: IHomeData;
}