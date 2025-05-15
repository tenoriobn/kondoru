import styled from 'styled-components';
import LocationIcon from 'public/icons/location.svg';
import {
  StyledCardContainer, StyledCardImage, StyledCardTitle, StyledText,
} from 'src/styles/ui/StyledCard';
import { PropertyCardProps } from 'src/features/Home/types/propertyCard.types';

const StyledContainerInfo = styled.div`
  display: grid;
  row-gap: 0.5rem;
`;

const StyledContainerLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const StyledLocation = styled(StyledText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <StyledCardContainer href={property.href}>
      <StyledCardImage src={property.imgSrc} alt={property.title} />

      <StyledContainerInfo>
        <StyledCardTitle title={property.title}>
          {property.title}
        </StyledCardTitle>

        <StyledContainerLocation>
          <LocationIcon />

          <StyledLocation title={property.location}>
            {property.location}
          </StyledLocation>
        </StyledContainerLocation>
      </StyledContainerInfo>
    </StyledCardContainer>
  );
}
