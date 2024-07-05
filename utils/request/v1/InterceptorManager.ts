export type Fulfilled =
  | ((value: RequestConfig | Response | any) => RequestConfig | Response | any)
  | null
  | undefined;

export type Rejected = ((reason: any) => PromiseLike<never>) | null | undefined;

export type Handler = { fulfilled: Fulfilled; rejected: Rejected };

type RequestConfig = RequestInit & {
  url?: string;
  headers?: Headers;
};

export default class InterceptorManager {
  handlers: Array<Handler | null> = [];

  use = (fulfilled: Fulfilled, rejected?: Rejected) => {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
    });

    return this.handlers.length - 1;
  };

  eject = (id: number) => {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  forEach = (fn: (handler: Handler) => void) => {
    this.handlers.forEach((handler) => {
      if (handler !== null) {
        fn(handler);
      }
    });
  };
}
