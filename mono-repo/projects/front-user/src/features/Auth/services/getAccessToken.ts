import { handleApiError } from 'src/utils';

const getAccessToken = async() => {
  try {
    const response = await fetch('/api/auth/get-token', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    // if (!response.ok) {
    //   throw new Error('Erro ao obter dados');
    // }

    const data = await response.json();
    return data;
  }  catch (error) {
    throw handleApiError(error);
  }
};

export default getAccessToken;