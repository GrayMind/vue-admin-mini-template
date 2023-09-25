import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/common/store';
import { getToken } from '@/common/utils/auth';
import { generateUUID } from './index';

const service = axios.create({
  timeout: 1000 * 60 * 10, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const uuid = generateUUID();
    const clientId = getToken() || uuid;
    config.headers.Accept = '*/*';
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
    // config.headers['X-App-Id'] = getAppId()
    config.headers['X-Client-Id'] = `callcenter.${clientId}`;
    if (store.getters.token) {
      config.headers['X-Token'] = getToken();
    }
    if (store.getters.currentOrganization && store.getters.currentOrganization.organizationGuid) {
      config.headers['X-Organization'] = store.getters.currentOrganization.organizationGuid;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log(error); // for debug
    let reason = null;
    const errorResponse = new Error();
    if (error.response) {
      reason = error.response.data ? error.response.data.message : error.request.statusText;
      errorResponse.message = reason;
      errorResponse.code = error.response.data.code;
    } else {
      reason = '网络请求失败';
    }

    Message({
      message: reason,
      type: 'error',
      duration: 2 * 1000,
    });

    // token 过期，重新登录
    if (errorResponse.code === '412') {
      setTimeout(() => {
        store.dispatch('user/resetUserInfo').then(() => {
          location.reload();
        });
      }, 2000);
    }

    return Promise.reject(errorResponse);
  },
);

export default service;
