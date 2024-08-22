import axios, { AxiosRequestConfig } from 'axios';
import apiUrls from '..';

const urls = apiUrls();

interface ApiRequestProps {
  body?: any;
  params?: any;
  queryParams?: any;
  headers?: any;
}

export const callApi = async ({ body, params, queryParams, headers }: ApiRequestProps) => {
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: urls.customerFetch,
      data: body,
      params: queryParams,
      headers: headers,
    };

    if (params) {
      config.url += `/${params}`;
    }

    const response = await axios(config);
    return [response.data, true];
  } catch (error) {
    return [error, false];
  }
};
