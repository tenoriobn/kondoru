export const FILTER_OPTIONS = [
  {
    id: 'contrato',
    label: 'Contrato',
    options: ['Venda', 'Aluguel'],
  },

  {
    id: 'imovel',
    label: 'Imóvel',
    options: ['Apartamento', 'Casa', 'Terreno', 'Comercial', 'Galpão', 'Sítio'],
  },

  {
    id: 'preco',
    label: 'Preço',
    options: [],
  },

  {
    id: 'localidade',
    label: 'Localidade',
    options: ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Oeste', 'Metropolitana'],
  },
] as const;

export const CONTRACT_LABEL_TO_VALUE = {
  Venda: 'sale',
  Aluguel: 'rent',
} as const;

export const PROPERTY_LABEL_TO_VALUE = {
  Apartamento: 'apartment',
  Casa: 'house',
  Terreno: 'land',
  Comercial: 'commercial',
  Galpão: 'warehouse',
  Sítio: 'farm',
} as const;

export const PRICE_OPTIONS = {
  rent: [
    { label: 'Até R$ 500', value: 500 },
    { label: 'Até R$ 1.000', value: 1000 },
    { label: 'Até R$ 2.500', value: 2500 },
    { label: 'Até R$ 5.000', value: 5000 },
    { label: 'Até R$ 10.000', value: 10000 },
    { label: 'Até R$ 15.000', value: 15000 },
    { label: 'Até R$ 20.000', value: 20000 },
    { label: 'Até R$ 25.000', value: 25000 },
  ],

  sale: [
    { label: 'Até R$ 150.000', value: 150000 },
    { label: 'Até R$ 300.000', value: 300000 },
    { label: 'Até R$ 500.000', value: 500000 },
    { label: 'Até R$ 750.000', value: 750000 },
    { label: 'Até R$ 1.000.000', value: 1000000 },
    { label: 'Até R$ 2.000.000', value: 2000000 },
    { label: 'Até R$ 5.000.000', value: 5000000 },
    { label: 'Até R$ 10.000.000', value: 10000000 },
    { label: 'Até R$ 20.000.000', value: 20000000 },
  ],
} as const;
