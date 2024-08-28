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

  const { width, height } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full bg-white justify-end items-center py-2">
        <View className="flex-row items-center justify-between w-[90%]">

          <View className="flex-1 items-center justify-center">
            <CorpLogoLight width={width * 0.3} height={width * 0.15} />
          </View>
          <View className="items-center justify-center">
            <NotificationIcon width={width * 0.06} height={width * 0.06} />
          </View>
        </View>
      </View>

      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}

export default _layout