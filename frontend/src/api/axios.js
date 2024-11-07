import axios from 'axios';
import {getItem} from '@/helpers/persistanceStorage';
axios.defaults.baseURL = 'http://localhost:3000/api/';

axios.interceptors.request.use((config) => {
  const token = getItem('jwt');
  const authorizationToken = token ? `Token ${token}` : '';
  config.headers.Authorization = authorizationToken;

  return config;
  
});

export default axios;
