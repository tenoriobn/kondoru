import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use((config) => {
  const token =  process.env.NEXT_PUBLIC_API_TOKEN;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});