import axios from 'axios';

const baseUrl = 'http://192.168.1.4:8000/api/v1';

const apiRequest = async (endpoint : string, method = 'GET', data : any = null, headers = {}) => {
  try {
    const response = await axios({
      url: `${baseUrl}${endpoint}`,
      method: method,
      data: data,
      headers: headers
    });
    return response.data; 
  } catch (error) {
    console.error('API request failed:', error);
    throw error; 
  }
};

export default apiRequest;
