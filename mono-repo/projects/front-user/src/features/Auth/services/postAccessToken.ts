import { handleApiError } from 'src/utils';

const postAccessToken = async(accessToken: object) => {
  try {
    const response = await fetch('/api/auth/set-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accessToken),
    });

    return response;
  }  catch (error) {
    throw handleApiError(error);
  }
};

export default postAccessToken;