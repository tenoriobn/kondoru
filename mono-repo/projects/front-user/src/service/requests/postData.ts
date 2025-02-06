import { AxiosError } from 'axios';
import { apiClient } from '../http';

const postData = async(endpoint: string, data: object) => {
  try {
    const response = await apiClient.post(endpoint, data);
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

export default postData;