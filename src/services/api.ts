import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2001',
  timeout: 90000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
