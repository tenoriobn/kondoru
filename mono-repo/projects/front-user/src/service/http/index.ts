import axios from 'axios';
import tokenJson from './token.json';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});


apiClient.interceptors.request.use((config) => {
  const token =  tokenJson.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});