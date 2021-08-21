import axios, { AxiosRequestConfig, Canceler } from "axios";
//import * as axiosHttpAdapter from "axios/lib/adapters/http";

//axios.defaults.adapter = axiosHttpAdapter;

export interface IHttpClientOptions {
  requestCancellation: boolean;
}

export interface ICanceledRejection {
  cancelled: boolean;
}

export type HttpClientRequestConfig = Partial<AxiosRequestConfig>;

class HttpClient {
  private source = axios.CancelToken.source();
  private instance = axios.create();

  constructor(private options: Partial<IHttpClientOptions> = {}) {}

  public cancel() {
    return this.source.cancel();
  }

  public get<T = any>(
    url: string,
    config: HttpClientRequestConfig = {}
  ): Promise<T | ICanceledRejection> {
    return this.instance
      .get<T>(url, this.getRequestConfig(config))
      .then((response) => response.data)
      .catch((err) => {
        if (axios.isCancel(err)) {
          throw { cancelled: true };
        }

        throw err;
      });
  }

  public post<T = any>(
    url: string,
    data: any = {},
    config: HttpClientRequestConfig = {}
  ): Promise<T> {
    return this.instance
      .post<T>(url, data, this.getRequestConfig(config))
      .then((response) => response.data)
      .catch((err) => {
        if (axios.isCancel(err)) {
          throw {
            cancelled: true,
          };
        }

        throw err;
      });
  }

  private getRequestConfig(
    config: HttpClientRequestConfig
  ): HttpClientRequestConfig {
    if (this.options.requestCancellation) {
      return {
        ...(config || {}),
        cancelToken: this.source.token,
      };
    }

    return config;
  }
}

export { HttpClient };
