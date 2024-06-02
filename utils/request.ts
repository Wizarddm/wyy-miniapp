import Taro from "@tarojs/taro";
import axios from "axios";

// 创建 axios 实例
const instance = axios.create({
  baseURL: "https://test.etradekey.com", // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    Taro.showLoading({ title: "加载中" });
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    Taro.hideLoading();
    Taro.showToast({
      title: "请求错误",
      icon: "none",
    });
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    Taro.hideLoading();
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    Taro.hideLoading();
    Taro.showToast({
      title: error.response?.data?.message || "请求失败",
      icon: "none",
    });
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export const get = (url, params = {}) => {
  return instance.get(url, { params });
};

// 封装 POST 请求
export const post = (url, data = {}) => {
  return instance.post(url, data);
};

// 其他请求方法可以类似封装，如 PUT, DELETE 等
