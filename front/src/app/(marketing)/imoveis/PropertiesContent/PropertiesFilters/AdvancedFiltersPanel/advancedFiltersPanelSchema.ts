import { z } from 'zod';

export const advancedFiltersPanelSchema = z.object({
  location: z.string().optional(),
  contractType: z.enum(['sale', 'rent']).optional(),
  propertyTypes: z.array(z.string()).optional(),
  priceRangeMin: z.number().optional(),
  priceRangeMax: z.number().optional(),
  propertyAreaMin: z.number().optional(),
  propertyAreaMax: z.number().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  garageSpots: z.string().optional(),
  furnished: z.enum(['na', 'yes', 'no']).optional(),
  nearMetro: z.enum(['na', 'yes', 'no']).optional(),
});

export type AdvancedFiltersPanelSchemaData = z.infer<typeof advancedFiltersPanelSchema>;
