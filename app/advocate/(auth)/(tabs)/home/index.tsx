import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Button, Card } from 'react-native-paper';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import { useNotificationStore } from '@/stores/notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdvocateHomePage = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const setNotification = useNotificationStore((state: { setNotification: any; }) => state.setNotification);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws/queries'); 
    ws.onopen = async () => {
      await AsyncStorage.setItem('advocate',"YES")
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (e) => {
      const notification = JSON.parse(e.data);
      setNotification(notification);
      ws.close()
    
      router.push('/advocate/home/query');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, [router, setNotification]);

  return (
    <View className="bg-white h-[100%] items-center pt-[5%]">
      <View className="h-[10%] w-full justify-end items-center">
        <Button
          mode="contained"
          className="w-[85%] h-[80%] items-center justify-center"
          labelStyle={{ fontSize: Math.round(fontScaledSizeRatio * 13), fontFamily: 'Caros-Medium' }}
          onPress={() => router.push('/advocate/home/query')}
        >
          Go to active chat
        </Button>
      </View>
      <View className="w-[85%] h-[80%]">
        <View className="flex h-[55%] w-full justify-between items-center mt-[10%]">
          <View className="flex-row h-[49%] w-full justify-between items-center">
            <Card
              className="w-[49%] h-full justify-center items-center border border-Blue-5 shadow-none bg-Blue-6"
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 50 }}
            >
              <View className="justify-center items-center">
                <Text className="font-cbold text-primary-background" style={{ fontSize: height * 0.05 }}>
                  10
                </Text>
                <Text className="font-clight text-Neutral-4" style={{ fontSize: height * 0.02 }}>
                  Resolved
                </Text>
              </View>
            </Card>
            <Card
              className="w-[49%] h-full justify-center items-center border border-Blue-5 shadow-none bg-Blue-6"
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 50, borderBottomRightRadius: 10 }}
            >
              <View className="justify-center items-center">
                <Text className="font-cbold text-primary-background" style={{ fontSize: height * 0.05 }}>
                  15
                </Text>
                <Text className="font-clight text-Neutral-4" style={{ fontSize: height * 0.02 }}>
                  Unresolved
                </Text>
              </View>
            </Card>
          </View>
          <View className="flex-row h-[49%] w-full justify-between items-center">
            <Card
              className="w-[49%] h-full justify-center items-center border border-Blue-5 shadow-none bg-Blue-6"
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
            >
              <View className="justify-center items-center">
                <Text className="font-cbold text-primary-background" style={{ fontSize: height * 0.05 }}>
                  16
                </Text>
                <Text className="font-clight text-Neutral-4" style={{ fontSize: height * 0.02 }}>
                  Requested
                </Text>
              </View>
            </Card>
            <Card
              className="w-[49%] h-full justify-center items-center border border-Blue-5 shadow-none bg-Blue-6"
              style={{ borderTopLeftRadius: 50, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
            >
              <View className="justify-center items-center">
                <Text className="font-cbold text-primary-background" style={{ fontSize: height * 0.05 }}>
                  02
                </Text>
                <Text className="font-clight text-Neutral-4" style={{ fontSize: height * 0.02 }}>
                  Lost
                </Text>
              </View>
            </Card>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdvocateHomePage;
