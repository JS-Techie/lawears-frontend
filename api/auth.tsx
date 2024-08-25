import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiUrls from './.';


const urls = apiUrls();

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const login = async (loginRequest: any): Promise<[any, boolean]> => {
  try {
    console.log("THE FUCKKK ", urls.auth + '/login')
    const response: AxiosResponse<any> = await axios.post(urls.auth + '/login', loginRequest, { headers: { ...defaultHeaders } });

    console.log("THE RESPONSE OF LOGIN ::: ", response)

    if (response.status === 200 && response.data.success) {

      const accessToken = response.data.data.access_token;
      typeof window !== 'undefined' ? localStorage.setItem('token', 'Bearer ' + accessToken) : null;

      return [response.data, true];
    } else {
      return [response.data, false];
    }
  } catch (error: any) {
    return [error.response?.data || error.message, false];
  }
};