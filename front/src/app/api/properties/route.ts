import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { properties } from './properties';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const page = Number(params.get('page') ?? '1');
  const perPage = Number(params.get('limit') ?? '6');

  const location = params.get('location');

  const contractType = params.get('contractType');

  const propertyTypes = params.get('propertyTypes');

  const priceRangeMin = Number(params.get('priceRangeMin'));
  const priceRangeMax = Number(params.get('priceRangeMax'));

  const propertyAreaMin = Number(params.get('propertyAreaMin'));
  const propertyAreaMax = Number(params.get('propertyAreaMax'));

  const bedrooms = params.get('bedrooms');
  const bathrooms = params.get('bathrooms');
  const garageSpots = params.get('garageSpots');

  const furnished = params.get('furnished');
  const nearMetro = params.get('nearMetro');

  const sort = params.get('sort');

  const filteredProperties = properties.filter((property) => {
    if (location) {
      const searchableLocation = [
        property.location.city,
        property.location.state,
        property.location.neighborhood,
      ]
        .join(' ')
        .toLowerCase();

      if (!searchableLocation.includes(location.toLowerCase())) {
        return false;
      }
    }

    if (contractType && property.contractType !== contractType) {
      return false;
    }

    if (propertyTypes) {
      const selectedTypes = propertyTypes.split(',');

      if (!selectedTypes.includes(property.propertyType)) {
        return false;
      }
    }

    if (!Number.isNaN(priceRangeMin) && priceRangeMin > 0) {
      if (property.price < priceRangeMin) {
        return false;
      }
    }

    if (!Number.isNaN(priceRangeMax) && priceRangeMax > 0) {
      if (property.price > priceRangeMax) {
        return false;
      }
    }

    if (!Number.isNaN(propertyAreaMin) && propertyAreaMin > 0) {
      if (property.area < propertyAreaMin) {
        return false;
      }
    }

    if (!Number.isNaN(propertyAreaMax) && propertyAreaMax > 0) {
      if (property.area > propertyAreaMax) {
        return false;
      }
    }

    if (bedrooms && bedrooms !== 'na') {
      const minBedrooms = Number(bedrooms.replace('+', ''));

      if (property.bedrooms < minBedrooms) {
        return false;
      }
    }

    if (bathrooms && bathrooms !== 'na') {
      const minBathrooms = Number(bathrooms.replace('+', ''));

      if (property.bathrooms < minBathrooms) {
        return false;
      }
    }

    if (garageSpots && garageSpots !== 'na') {
      const minGarageSpots = Number(garageSpots.replace('+', ''));

      if (property.garageSpots < minGarageSpots) {
        return false;
      }
    }

    if (furnished === 'tes' && !property.furnished) {
      return false;
    }

    if (furnished === 'no' && property.furnished) {
      return false;
    }

    if (nearMetro === 'yes' && !property.nearMetro) {
      return false;
    }

    if (nearMetro === 'no' && property.nearMetro) {
      return false;
    }

    return true;
  });

  switch (sort) {
    case 'price_asc':
    case 'price-asc':
      filteredProperties.sort((a, b) => a.price - b.price);
      break;

    case 'price_desc':
    case 'price-desc':
      filteredProperties.sort((a, b) => b.price - a.price);
      break;

    case 'area_asc':
    case 'area-asc':
      filteredProperties.sort((a, b) => a.area - b.area);
      break;

    case 'area_desc':
    case 'area-desc':
      filteredProperties.sort((a, b) => b.area - a.area);
      break;

    case 'newest':
      filteredProperties.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
  }

  const totalItems = filteredProperties.length;

  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedProperties = filteredProperties.slice(start, end);

  return NextResponse.json({
    data: paginatedProperties,

    meta: {
      page,
      perPage,
      totalItems,
      totalPages,
    },
  });
}
