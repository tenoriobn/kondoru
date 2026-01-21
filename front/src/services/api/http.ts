const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${input}`, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    credentials: 'include',
    ...init,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
