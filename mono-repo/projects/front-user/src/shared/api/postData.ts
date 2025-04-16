import { apiClient } from '../infra/httpClient';
import handleApiError from 'src/utils/handleApiError';

const postData = async(endpoint: string, data: object) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  }  catch (error) {
    throw handleApiError(error);
  }
};

export default postData;