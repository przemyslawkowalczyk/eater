import axios from 'axios';
import { toast } from 'react-toastify';

function errorResponseHandler(error) {
  // check for errorHandle config
  if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
    return Promise.reject(error);
  }

  toast.error(error.toString());
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
});

axiosInstance.interceptors.response.use(
  response => response,
  errorResponseHandler
);

export default axiosInstance;