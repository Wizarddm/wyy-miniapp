import { mergeConfig } from "@/lib/v1/utils";
import InterceptorManager from "@/lib/v1/InterceptorManager";
import dispatchRequest from "@/lib/v1/dispatch-request";
import path from "path";

type RequestConfig = RequestInit & {
  url?: string;
  headers?: Headers;
  params?: any;
  data?: any;
};

export default class BaseRequest {
  constructor(url: string, instanceConfig?: RequestConfig) {
    this.url = url;
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
    };
  }

  url: string;
  defaults: RequestConfig;
  interceptors;

  request = (url: string, config?: RequestConfig) => {
    config = mergeConfig(this.defaults, config || {});
    (config as RequestConfig).url = path.join(this.url, url);

    let chain: any[] = [dispatchRequest, undefined];
    let promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshiftRequestInterceptors(
      interceptor
    ) {
      chain.unshift(interceptor?.fulfilled, interceptor?.rejected);
    });

    this.interceptors.response.forEach(function pushResponseInterceptors(
      interceptor
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise as Promise<any>;
  };

  get = (url: string, config?: RequestConfig) => {
    return this.request(url, { ...config, method: "get" });
  };

  post = (url: string, config?: RequestConfig) => {
    return this.request(url, { ...config, method: "post" });
  };

  del = (url: string, config?: RequestConfig) => {
    return this.request(url, { ...config, method: "DELETE" });
  };

  put = (url: string, config?: RequestConfig) => {
    return this.request(url, { ...config, method: "put" });
  };

  patch = (url: string, config?: RequestConfig) => {
    return this.request(url, { ...config, method: "patch" });
  };
}
