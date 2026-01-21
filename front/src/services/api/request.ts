import { http } from './http';

export async function httpGet<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return http<T>(url, {
    method: 'GET',
    ...options,
  });
}

export async function httpPost<T, B = unknown>(
  url: string,
  body: B,
  options?: RequestInit
): Promise<T> {
  return http<T>(url, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
}

export async function httpPut<T, B = unknown>(
  url: string,
  body: B,
  options?: RequestInit
): Promise<T> {
  return http<T>(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...options,
  });
}

export async function httpDelete<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return http<T>(url, {
    method: 'DELETE',
    ...options,
  });
}
