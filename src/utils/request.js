import axios from 'axios';
import router from '@/router';

import store from '@/store';
import { getToken } from '@/utils/auth';

const service = axios.create({
  timeout: 1000 * 60 * 5, // request timeout
});

const tokenHeader = 'token'; // token自定义头部名称
service.interceptors.request.use((config) => {
  const { token } = store.state.user;
  if (token) {
    /* eslint-disable no-param-reassign */
    config.headers[tokenHeader] = getToken();
  }
  return config;
}, (error) => {
  Promise.reject(error);
});

service.interceptors.response.use((res) => res, (err) => {
  if (err.response.status === 401) {
    localStorage.removeItem('loginStatus');
    router.push({ name: 'Login' });
  }
  return Promise.reject(err);
});

export default service;
