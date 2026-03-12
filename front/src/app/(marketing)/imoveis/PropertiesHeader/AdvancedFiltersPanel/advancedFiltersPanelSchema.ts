import { z } from 'zod';

export const advancedFiltersPanelSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export type AdvancedFiltersPanelSchemaData = z.infer<typeof advancedFiltersPanelSchema>;
