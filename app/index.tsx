import { Text, View, useWindowDimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { TouchableRipple } from 'react-native-paper';
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import { SafeAreaView } from 'react-native-safe-area-context';

import {TextEncoder} from 'text-encoding';
import Matching from './(tabs)/home/matching';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Session from './(tabs)/session';

// global.TextEncoder = TextEncoder;

const Homepage = () => {

  const router = useRouter()

useEffect(() => {

  const fetchToken = async () => {
    try{
      const token = await AsyncStorage.getItem("access_token")
      const role = await AsyncStorage.getItem("user_role")
  
      if (token && token !== undefined){
  
        if (role == 'CUSTOMER'){
          router.push('/home');
        }else{
          router.push('/advocate/home');
        }
      }else{
        router.push('/login')
      }
    }catch(err){
      console.log(err)
    }
   
  }

  fetchToken()
},[])
  

  const { width } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
 
  

    // <SafeAreaView className='bg-white' >
<SafeAreaView className="flex h-screen bg-Neutral-12 items-center" >
      {/* <Session /> */}
      {/* <Matching /> */}
        <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: width * 0.3, height: width * 0.3 }}
        resizeMode="contain"
      />
      <View className="flex-2 justify-center items-center h-1/3">
        <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className="flex w-full h-[30%] justify-center items-center" onPress={() => {}}>
          <View className="flex-row h-full w-[85%] justify-start items-center">
            <View className="h-full w-[20%] justify-center items-end">
              <View className="rounded-full bg-Neutral-13 items-center justify-center" style={{ height: width * 0.1, width: width * 0.1 }}>
                <Text className="text-Neutral-12 font-cbold text-center" style={{ fontSize: Math.round(fontScaledSizeRatio * 24) }}>
                  <Link href="/login">1</Link>
                </Text>
              </View>
            </View>
            <View className="flex h-full w-[80%] items-start justify-center pl-[10%]">
              <Text className="text-Neutral-13 font-cmedium" style={{ fontSize: Math.round(fontScaledSizeRatio * 30) }}>
                <Link href="/login">Customer</Link>
              </Text>
            </View>
          </View>
        </TouchableRipple>

        <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className="flex w-full h-[30%] justify-center items-center" onPress={() => {}}>
          <View className="flex-row h-full w-[85%] justify-start items-center">
            <View className="h-full w-[20%] justify-center items-end">
              <View className="rounded-full bg-Neutral-13 items-center justify-center" style={{ height: width * 0.1, width: width * 0.1 }}>
                <Text className="text-Neutral-12 font-cbold text-center" style={{ fontSize: Math.round(fontScaledSizeRatio * 24) }}>2</Text>
              </View>
            </View>

            <View className="flex h-full w-[80%] items-start justify-center pl-[10%]">
              <Link href='/advocate/'>
              <Text className="text-Neutral-13 font-cmedium" style={{ fontSize: Math.round(fontScaledSizeRatio * 30) }}>Advocate</Text>
              </Link>
            </View>
          </View>
        </TouchableRipple>
      </View>

      <View className="flex-1"></View>
    </SafeAreaView>
  );
};

export default Homepage;
