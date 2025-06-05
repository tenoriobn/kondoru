/* eslint-disable no-console */
import { AxiosError } from 'axios';
import { apiClient } from '../httpClient';

export const fetchData = async(endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error fetching data: ', error.response?.data || error.message);
      throw error.response?.data || error.message;
    } else {
      console.error('Unexpected error: ', error);
      throw error;
    }
  }
};