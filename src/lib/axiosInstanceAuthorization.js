import axios from 'axios';

const axiosInstanceAuthorization = axios.create({
  baseURL: `/api/user`
});

axiosInstanceAuthorization.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstanceAuthorization;
