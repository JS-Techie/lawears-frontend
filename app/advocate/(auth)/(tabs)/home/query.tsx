import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Card, Chip } from 'react-native-paper';
import React from 'react';
import { useRouter } from 'expo-router';

import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import { useNotificationStore } from '@/stores/notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiRequest from '@/api';

const AdvocateQueryPage = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  // Get the latest notification from the Zustand store
  const notification = useNotificationStore((state: { notification: any; }) => state.notification);

  // Default values if no notification is available yet
  const queryId = notification?.query_id || 'N/A';
  const queryDescription = notification?.description || 'No description available';
  // const queryTypes = notification?.query_types || [];

  const queryTypes = [
    'Contract Drafting', 'Legal Advice'
  ]

  const handleQueryAcceptance = async () => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNThiNGY0OTItODE1ZS00YzljLWE4OGQtNjgyZWU3MTQ1NTk2Iiwicm9sZSI6IkFEVk9DQVRFIiwiZXhwIjoxNzI0NzA1NzI5fQ.ejXuxApN58LBjNaIJPGyt_AQIBklrtQqFXEKqfGht7w'
      //await AsyncStorage.getItem('access_token');
      console.log(token)
  
      if (!token) {
        throw new Error('Bearer token is missing.');
      }
  
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
  
      const response = await apiRequest(`/query/accept/${queryId}`, 'PATCH', {}, headers);
  
      console.log('Query accepted successfully:', response);
  
      // Open connection to ws/queries
      const ws = new WebSocket(`ws://localhost:8000/ws/queries`);
  
      ws.onopen = () => {
        console.log('WebSocket connection to /queries opened.');
      };
  
      ws.onmessage = (event) => {
        console.log('Received message:', event.data);
        // Handle WebSocket messages here
      };
  
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      ws.onclose = () => {
        console.log('WebSocket connection closed.');
      };
  
      // Proceed to the next screen or handle the response further
    } catch (error) {
      console.error('Failed to accept query:', error);
    }
  };

  const handleQueryRejection = () => {
    router.push('/advocate/(auth)/(tabs)/home');
  };

  return (
    <View className="bg-white h-[100%] items-center pt-[5%]">
      <View className="h-[15%] w-full justify-center items-center">
        <Text className="text-Neutral-2 font-cbold" style={{ fontSize: width * 0.06 }}>
          Query ID
        </Text>
        <Text className="text-Neutral-7 font-cbold" style={{ fontSize: width * 0.04 }}>
          {queryId}
        </Text>
      </View>
      <View className="max-h-[30%] min-h-[20%] overflow-scroll w-[85%] justify-center items-center">
        <Text className="text-Neutral-7 font-cbold" style={{ fontSize: width * 0.03 }}>
          Query
        </Text>
        <Card className="min-h-[80%] max-h-full w-full bg-Neutral-10 rounded-xl shadow-none justify-center items-center my-[2%] p-4">
          <View className="flex w-[85%] h-full mx-[5%] items-center justify-between">
            <View className="flex w-full items-center justify-between mb-[5%]">
              <Text className="font-c" style={{ fontSize: width * 0.03 }}>
                {queryDescription}
              </Text>
            </View>
            <View className="flex-row flex-wrap w-full items-center justify-start">
              {queryTypes.map((type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                <Chip
                  key={index}
                  className="mr-[2%] my-[2%] bg-primary-foreground"
                  textStyle={{ color: 'white', fontFamily: 'Caros', fontSize: height * 0.012 }}
                >
                  {type}
                </Chip>
              ))}
            </View>
          </View>
        </Card>
      </View>
      <View className="h-[20%]" />
      <View className="h-[20%] w-full justify-center items-center">
        <View className="flex-row h-[85%] w-full justify-evenly items-center">
          <View className="flex h-[40%] w-[40%] border-4 border-success-background rounded-2xl">
            <TouchableOpacity className="flex-row h-full w-full justify-evenly items-center border-3 border-success-background p-2" onPress={handleQueryAcceptance}>
              <View style={{ height: width * 0.1, width: width * 0.1 }} className=" rounded-full justify-center items-center">
                <Text style={{ fontSize: width * 0.06 }} className="text-success-background">
                  ✔
                </Text>
              </View>
              <Text className="font-c text-Neutral-4" style={{ fontSize: width * 0.045 }}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex h-[40%] w-[40%] border-4 border-error-background rounded-2xl">
            <TouchableOpacity className="flex-row h-full w-full justify-evenly items-center" onPress={handleQueryRejection}>
              <View style={{ height: width * 0.1, width: width * 0.1 }} className="border-4 border-error-background rounded-full justify-center items-center">
                <Text style={{ fontSize: width * 0.06 }} className="text-error-background font-c">
                  !
                </Text>
              </View>
              <Text className="font-c text-Neutral-4" style={{ fontSize: width * 0.045 }}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdvocateQueryPage;
