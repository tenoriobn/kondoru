import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const stateHomePage = atom({
  key: `${uuidv4()}`,
  default: undefined,
});