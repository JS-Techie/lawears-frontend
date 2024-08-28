
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1';

export const apiUrls = () => {
    const host = 'http://localhost:8000';
    const versionPrefix = '/api/v1';
    const baseUrl = host +  versionPrefix;

    return {
        query: `${baseUrl}/query`,
        auth:  `${baseUrl}/auth`
    }
}





const apiRequest = async (endpoint : string, method = 'GET', data : any = null, headers = {} ,adv : boolean = false) => {

  let bearerToken = await AsyncStorage.getItem("access_token")
  let customer = await AsyncStorage.getItem("customer")
  let advocate = await AsyncStorage.getItem("advocate")

  if (advocate == 'YES'){
    bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNThiNGY0OTItODE1ZS00YzljLWE4OGQtNjgyZWU3MTQ1NTk2Iiwicm9sZSI6IkFEVk9DQVRFIiwiZXhwIjoxNzI0ODU0MTAwfQ.o6kGJE3ZndKMHdtnR_scEowQRijT0fnPJmCHgqoGagA'
  }


  try {
    const response = await axios({
      url: `${baseUrl}${endpoint}`,
      method: method,
      data: data,
      headers: {
        Authorization : `Bearer ${bearerToken}`,
        Accept : 'application/json'
      }
    });
    return response.data; 
  } catch (error) {
    console.error('API request failed:', error);
    throw error; 
  }
};

export default apiRequest;
