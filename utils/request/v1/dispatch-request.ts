import * as utils from "./utils";

export default function dispatchRequest(config: any) {
  let { url, params, data, ...otherConfig } = config;

  // 处理 url
  url = utils.transformUrl(url, params);
  // 处理 body
  otherConfig.body = utils.transformData(
    data,
    config.headers,
    config.transformRequest
  );

  const request = new Request(url, otherConfig);

  return fetch(request).then(
    function onResolution(response: any) {
      response = utils.transformData(
        response,
        response.headers,
        config.transformResponse
      );
      return response;
    },
    function onRejection(reason) {
      if (reason && reason.response) {
        reason.response.data = utils.transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
      return Promise.reject(reason);
    }
  );
}
