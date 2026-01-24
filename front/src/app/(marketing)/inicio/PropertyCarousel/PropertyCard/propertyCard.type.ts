export interface PropertyCard {
  id: string;
  href: string;
  imgSrc: string;
  title: string;
  location: string;
}

export interface PropertyCardProps {
  property: PropertyCard;
}
