import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {apiUrls} from '../.';
import { queryApi } from '@/interfaces/query';

const urls = apiUrls();
console.log("THE URLS ::: ", urls)

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Authorization': typeof window !== 'undefined' && localStorage.getItem('token'),
};

// // Helper function to handle API responses
// const handleResponse = <T>(response: AxiosResponse<T>): [T, boolean] => {
//   return [response.data, true];
// };

// // Helper function to handle API errors
// const handleError = (error: any): [any, boolean] => {
//   console.error(error);
//   return [error?.response?.data || 'Something went wrong', false];
// };



export const getAll = async (): Promise<[any, boolean]> => {
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: urls.query,
      headers: { ...defaultHeaders },
    };
    console.log("THE GETALL CONFIG :::",config)

    const response = await axios(config);
    console.log("THE RESPONSE INSIDE API ::: ", response)
    return [response, true]
  } catch (error) {
    return [error, false]
  }
};

export const get = async (id: string): Promise<[any, boolean]> => {
  try {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: urls.query + `/${id}`,
      headers: { ...defaultHeaders },
    };

    const response = await axios(config);
    return [response, true]
  } catch (error) {
    return [error, false]
  }
};

export const createRecord = async (body: queryApi): Promise<[any, boolean]> => {
  try {
    const config: AxiosRequestConfig = {
      method: 'post',
      url: urls.query,
      headers: { ...defaultHeaders },
      data: body,
    };

    const response = await axios(config);
    return [response, true]
  } catch (error) {
    return [error, false]
  }
};

export const updateRecord = async (id: string, body: any): Promise<[any, boolean]> => {
  try {
    const config: AxiosRequestConfig = {
      method: 'patch',
      url: `${urls.query}/${id}`,
      headers: { ...defaultHeaders },
      data: body,
    };

    const response = await axios(config);
    return [response, true]
  } catch (error) {
    return [error, false]
  }
};

export const deleteRecord = async (id: string): Promise<[any, boolean]> => {
  try {
    const config: AxiosRequestConfig = {
      method: 'delete',
      url: `${urls.query}/${id}`,
      headers: { ...defaultHeaders },
    };

    const response = await axios(config);
    return [response, true]
  } catch (error) {
    return [error, false]
  }
};