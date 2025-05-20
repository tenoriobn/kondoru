export async function verifyResetToken(token: string): Promise<boolean> {
  const baseUrl = 'http://host.docker.internal:8080/api';
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(`${baseUrl}/user/verify-reset-token/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });

    return response.ok;
  } catch {
    return false;
  }
}
