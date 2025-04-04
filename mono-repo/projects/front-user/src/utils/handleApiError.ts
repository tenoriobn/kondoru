/* eslint-disable no-console */
import { AxiosError } from 'axios';

const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    console.error('API Error:', error.response?.data || error.message);
    return error.response?.data?.message || error.message;
  }

  console.error('Unexpected Error:', error);
  return 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
};

export default handleApiError;
