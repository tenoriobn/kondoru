import { AxiosError } from 'axios';
import { apiClient } from '../http';

const fetchData = async(endpoint: string) => {
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

export default fetchData;