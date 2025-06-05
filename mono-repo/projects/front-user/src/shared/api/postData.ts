import { handleApiError } from 'src/utils';
import { apiClient } from '../httpClient';

export const postData = async(endpoint: string, data: object) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  }  catch (error) {
    throw handleApiError(error);
  }
};