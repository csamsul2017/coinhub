import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default axiosClient;
