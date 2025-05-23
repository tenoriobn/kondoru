import styled from 'styled-components';
import LocationIcon from 'public/icons/location.svg';
import {
  StyledCardContainer, StyledCardImage, StyledCardTitle, StyledText,
} from 'src/styles/ui/StyledCard';
import { PropertyCardProps } from 'src/features/Home/types/propertyCard.types';

const Styled = {
  ContainerInfo: styled.div`
    display: grid;
    row-gap: 0.5rem;
  `,

  ContainerLocation: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: nowrap;
    overflow: hidden;
  `,

  Location: styled(StyledText)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};


export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <StyledCardContainer href={property.href}>
      <StyledCardImage src={property.imgSrc} alt={property.title} />

      <Styled.ContainerInfo>
        <StyledCardTitle title={property.title}>
          {property.title}
        </StyledCardTitle>

        <Styled.ContainerLocation>
          <LocationIcon />

          <Styled.Location title={property.location}>
            {property.location}
          </Styled.Location>
        </Styled.ContainerLocation>
      </Styled.ContainerInfo>
    </StyledCardContainer>
  );
}
