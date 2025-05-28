import { Dispatch, SetStateAction } from 'react';

export interface NavLinks {
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}