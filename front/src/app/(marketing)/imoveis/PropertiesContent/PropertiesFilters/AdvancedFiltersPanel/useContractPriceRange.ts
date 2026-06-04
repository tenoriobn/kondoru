import { useEffect, useRef } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { AdvancedFiltersPanelSchemaData } from './advancedFiltersPanelSchema';

export function useContractPriceRange(methods: UseFormReturn<AdvancedFiltersPanelSchemaData>) {
  const contractType = methods.watch('contractType');

  const rentValues = useRef({
    min: 500,
    max: 25000,
  });

  const saleValues = useRef({
    min: 150000,
    max: 20000000,
  });

  const previousContract = useRef(contractType);

  useEffect(() => {
    const subscription = methods.watch((values) => {
      if (
        values.contractType === 'rent' &&
        values.priceRangeMin === 500 &&
        values.priceRangeMax === 25000
      ) {
        rentValues.current = {
          min: 500,
          max: 25000,
        };

        saleValues.current = {
          min: 150000,
          max: 20000000,
        };
      }
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  useEffect(() => {
    const currentMin = Number(methods.getValues('priceRangeMin'));
    const currentMax = Number(methods.getValues('priceRangeMax'));

    if (previousContract.current === 'rent') {
      rentValues.current = {
        min: currentMin,
        max: currentMax,
      };
    }

    if (previousContract.current === 'sale') {
      saleValues.current = {
        min: currentMin,
        max: currentMax,
      };
    }

    if (contractType === 'rent') {
      methods.setValue('priceRangeMin', Math.max(500, rentValues.current.min));

      methods.setValue(
        'priceRangeMax',
        Math.max(Math.max(500, rentValues.current.min), rentValues.current.max)
      );
    }

    if (contractType === 'sale') {
      methods.setValue('priceRangeMin', Math.max(150000, saleValues.current.min));

      methods.setValue(
        'priceRangeMax',
        Math.max(Math.max(150000, saleValues.current.min), saleValues.current.max)
      );
    }

    previousContract.current = contractType;
  }, [contractType, methods]);
}
