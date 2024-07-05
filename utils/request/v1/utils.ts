export function transformUrl(url: string, params?: Record<string, string>) {
  if (!params) return url;

  let p = new URLSearchParams(params);

  return `${url}?${p.toString()}`;
}

export function transformData(data: any, headers: any, fns: any[]) {
  fns.forEach(function transform(fn) {
    data = fn(data, headers);
  });

  return data;
}

export function mergeConfig(config1: any, config2: any) {
  const { headers, ...otherConfig } = config2;
  const config = { ...config1 };
  if (headers) {
    headers.forEach((value: string, key: string, parent: Headers) => {
      // parent.console.log("222", value, key, parent);
      config.headers.set(value[0], value[1]);
    });
  }
  Object.entries(otherConfig).forEach(([key, value]: [string, any]) => {
    config[key] = value;
  });

  return config;
}

function deepMerge(...args: any[] /* obj1, obj2, obj3, ... */) {
  var result: Record<string, any> = {};
  function assignValue(val: any, key: string) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = args.length; i < l; i++) {
    forEach(args[i], assignValue);
  }
  return result;
}

function forEach(obj: any, fn: Function) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === "undefined") {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== "object") {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

function isArray(val: any) {
  return toString.call(val) === "[object Array]";
}
