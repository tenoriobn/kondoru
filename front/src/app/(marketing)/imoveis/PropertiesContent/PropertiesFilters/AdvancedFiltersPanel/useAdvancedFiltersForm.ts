'use client';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  advancedFiltersPanelSchema,
  type AdvancedFiltersPanelSchemaData,
} from './advancedFiltersPanelSchema';
import type {
  BathroomsValue,
  FurnishedValue,
  GarageSpotsValue,
  NearMetroValue,
} from './advancedFiltersPanel.type';

export function useAdvancedFiltersForm() {
  const searchParams = useSearchParams();

  return useForm<AdvancedFiltersPanelSchemaData>({
    resolver: zodResolver(advancedFiltersPanelSchema),
    mode: 'onTouched',

    defaultValues: {
      location: searchParams.get('location') ?? '',
      contractType: (searchParams.get('contractType') as 'rent' | 'sale') ?? 'rent',

      propertyTypes: searchParams.get('propertyTypes')?.split(',').filter(Boolean) ?? [],

      priceRangeMin: Number(searchParams.get('priceRangeMin') ?? 500),

      priceRangeMax: Number(searchParams.get('priceRangeMax') ?? 25000),

      propertyAreaMin: Number(searchParams.get('propertyAreaMin') ?? 20),

      propertyAreaMax: Number(searchParams.get('propertyAreaMax') ?? 1000),

      bedrooms: searchParams.get('bedrooms') ?? '1+',

      bathrooms: (searchParams.get('bathrooms') as BathroomsValue) ?? '1+',

      garageSpots: (searchParams.get('garageSpots') as GarageSpotsValue) ?? 'na',

      furnished: (searchParams.get('furnished') as FurnishedValue) ?? 'na',

      nearMetro: (searchParams.get('nearMetro') as NearMetroValue) ?? 'na',
    },
  });
}
