import { ElegantShowCase } from './types/elegantShowcase.type';
import { PropertyCard } from './types/propertyCard.type';
import { Footer } from './types/footer.type';
import { TestimonialCard } from './types/testimonialCard.type';
import { DropdownProps } from './types/dropdown.type';
import { MenuLink } from './sections/Header/ResponsiveMenu/responsiveMenu.type';
import { HeroSection } from './types/heroSection.type';

export interface IHomeData {
  menuLinks: MenuLink[];
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