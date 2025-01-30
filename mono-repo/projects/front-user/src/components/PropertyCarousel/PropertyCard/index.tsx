import styled from 'styled-components';
import Location from 'public/icons/location.svg';
import Link from 'next/link';
import { IPropertyCardProps } from 'src/interfaces/featuredProperties/IPropertyCard';

const StyledCardContainer = styled(Link)`
  display: grid;
  row-gap: 1rem;
  cursor: pointer;
  max-width: 401px;

  @media (min-width: 768px) {
    max-width: 376px;
  }
`;

const StyledCardImage = styled.img`
  border-radius: 1.5rem;
  width: 100%;
`;

const StyledCardInfo = styled.div`
  display: grid;
  row-gap: 0.5rem;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCardLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const StyledCardLocation = styled.h4`
  color: ${({ theme }) => theme.colors['dark-slate-58']};
  font-size: 1.25rem;
  line-height: 1.375rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function PropertyCard({ property }: IPropertyCardProps) {
  return (
    <StyledCardContainer href={property.href}>
      <StyledCardImage src={property.imgSrc} alt={property.title} />
      
      <StyledCardInfo>
        <StyledCardTitle title={property.title}>
          {property.title}
        </StyledCardTitle>

        <StyledCardLocationContainer>
          <Location />
          <StyledCardLocation title={property.location}>
            {property.location}
          </StyledCardLocation>
        </StyledCardLocationContainer>
      </StyledCardInfo>
    </StyledCardContainer>
  );
}
