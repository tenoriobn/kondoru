import { IPropertyCard } from '../featuredProperties/IPropertyCard';
import { ITestimonialCard } from '../TestimonialCarousel/ITestimonialCard';
import { IDropdownProps } from './IDropdown';
import { IMenuLink } from './IMenu';

export interface IHomePageStaticData {
  menuLinks: IMenuLink[];
  dropdowns: IDropdownProps[];
  heroSection: { 
    titulo: string
    slogan: string
  };
  properties: IPropertyCard[];
  testimonials: ITestimonialCard[];
}
