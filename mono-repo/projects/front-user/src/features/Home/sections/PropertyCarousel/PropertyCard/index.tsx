import styled from 'styled-components';
import LocationIcon from 'public/icons/location.svg';
import { PropertyCardProps } from 'src/features/Home/types/propertyCard.type';
import { CardContainer, CardImage, CardText, CardTitle } from 'src/styles';

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

  Location: styled(CardText)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `,
};


export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <CardContainer href={property.href}>
      <CardImage src={property.imgSrc} alt={property.title} />

      <Styled.ContainerInfo>
        <CardTitle title={property.title}>
          {property.title}
        </CardTitle>

        <Styled.ContainerLocation>
          <LocationIcon />

          <Styled.Location title={property.location}>
            {property.location}
          </Styled.Location>
        </Styled.ContainerLocation>
      </Styled.ContainerInfo>
    </CardContainer>
  );
}
