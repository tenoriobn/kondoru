import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json',}
});

/* 
Lembrete: Criar o Interceptors que verifica se está logado ou não em `service`
e não nesse arquivo
*/