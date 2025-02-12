/* eslint-disable no-unused-vars */
import handleApiError from 'src/utils/handleApiError';

const deleteAccessToken = async() => {
  try {
    const response = await fetch('/api/auth/delete-token', {
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

export default deleteAccessToken;