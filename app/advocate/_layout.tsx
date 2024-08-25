import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, View, useWindowDimensions } from 'react-native';

import CorpLogoLight from '@/assets/logo/CorpLogoLight.svg'
import NotificationIcon from '@/assets/logo/VectorNotification.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();


const _layout = () => {
  
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  
  return (
    <>
      <Stack>
          <Stack.Screen name='index' options={{headerShown: false}}/>
          <Stack.Screen name='(auth)' options={{headerShown: false}}/>
      </Stack>
    </>
  )
}

export default _layout