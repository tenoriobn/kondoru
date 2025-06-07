import { sign } from 'jsonwebtoken';
import jsonSecret from '../database/config/jsonSecret';

export const generateToken = (payload: object, expiresIn = '1d') => {
  return sign(payload, jsonSecret.secret, { expiresIn });
};
