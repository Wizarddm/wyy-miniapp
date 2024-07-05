import BaseRequest from "./BaseRequest";
import defaultConfig from "./default-config";
import { baseUrl } from "./config";

// log trace-id
defaultConfig.transformResponse.unshift((response: any) => {
  const traceId = response.headers.get("trace-id");
  console.info("Request", { traceId, url: response.url });
  return response;
});

const R = new BaseRequest(baseUrl, defaultConfig);
// const R = new BaseRequest("http://172.25.6.45:30123", defaultConfig);

// const baseUrl = "http://172.25.6.45:30123"; // 开发

// Request log
R.interceptors.request.use((config) => {
  let arrHeader: string[] = [];
  config.headers.forEach((value: string, key: string) => {
    arrHeader.push(key + ":" + value);
  });
  console.info("Request", { ...config, headers: arrHeader });

  return config;
});

// 设置token ， 设置默认header
R.interceptors.request.use((config) => {
  const token = "";
  config.headers.set("Content-Type", "application/json");
  if (token) config.headers.set("Access-Token", token);

  return config;
});

// response log
R.interceptors.response.use((response: any) => {
  console.info(`Response:`, response);

  return response;
});

// token失效后的退出处理
R.interceptors.response.use((response: any) => {
  if ([4].includes(response.code)) {
    // cookies().delete("ACCESS_TOKEN");
    // permanentRedirect("/login");
  }

  return response;
});

export default R;
