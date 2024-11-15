import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000', // Cambia el puerto según tu configuración
});

export default axiosInstance;