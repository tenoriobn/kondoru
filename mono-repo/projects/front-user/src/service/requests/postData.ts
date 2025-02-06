import { apiClient } from "../http";

const postData = async (endpoint: string, data: Record<string, any>) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export default postData;