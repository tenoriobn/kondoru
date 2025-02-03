import { IElegantShowCase } from './data/IElegantShowcase';
import { IPropertyCard } from './data/IPropertyCard';
import { IFooter } from './data/IFooter';
import { ITestimonialCard } from './data/ITestimonialCard';
import { IDropdownProps } from './data/IDropdown';
import { IMenuLink } from './data/IMenu';
import { IHeroSection } from './data/IHeroSection';

export interface IHomeData {
  menuLinks: IMenuLink[];
  dropdowns: IDropdownProps[];
  heroSection: IHeroSection;
  properties: IPropertyCard[];
  testimonials: ITestimonialCard[];
  elegantShowcase: IElegantShowCase;
  footer: IFooter;
}

export interface IHomeDataProps {
  homeData: IHomeData;
}