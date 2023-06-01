import axios, { AxiosStatic } from "axios";

export const setHeader = (
  axiosInstance: AxiosStatic,
  key: string,
  value: string
) => {
  axiosInstance.defaults.headers.common[key] = value;
};

export const setToken = (
  axiosInstance: AxiosStatic,
  token?: string | null,
  type?: string
) => {
  if (!type) {
    if (!token) return;
    axiosInstance.defaults.headers.common["authorization"] = token;
    return;
  }

  switch (type) {
    case "Bearer":
      axiosInstance.defaults.headers.common[
        "authorization"
      ] = `Bearer ${token}`;
      break;
    default:
      break;
  }
};

export const axiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const $axios = axios;
export const $axiosInstance = axiosInstance;
