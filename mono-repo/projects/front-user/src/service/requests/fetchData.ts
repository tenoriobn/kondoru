import { apiClient } from "../http";

const fetchData = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching data: ", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export default fetchData;