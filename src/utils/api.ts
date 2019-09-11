import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import config from './config';

// 取消重复请求
const pending: Array<{
  url: string,
  cancel: () => void,
}> = [];

const cancelToken = axios.CancelToken;
const removePending = (req: AxiosRequestConfig) => {
  for (let p in pending) {
    if (pending.hasOwnProperty(p)) {
      let item: any = p;
      let list: any = pending[p];
      // 当前请求在数组中存在时执行函数体
      if (list.url === req.url + '&request_type=' + req.method) {
        // 执行取消操作
        list.cancel();
        // 从数组中移除记录
        pending.splice(item, 1);
      }
    }
  }
};

const service = axios.create(config);

// 添加请求拦截器
service.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    removePending(req);
    config.cancelToken = new cancelToken((c) => {
      pending.push({ url: req.url + '&request_type=' + req.method, cancel: c });
    });
    return req;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res: AxiosResponse) => {
    removePending(res.config);
    return res;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// get
export const _get = (req: any) => {
  return service.get(req.url, { params: req.data });
};

// post
export const _post = (req: any) => {
  return service({ method: 'post', url: `/${req.url}`, data: req.data });
};

// patch
export const _put = (req: any) => {
  return service({ method: 'put', url: `/${req.url}`, data: req.data });
};

// delete
export const _delete = (req: any) => {
  return service({ method: 'delete', url: `/${req.url}`, data: req.data });
};

export default service;
