import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost',
  timeout: 90000,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
