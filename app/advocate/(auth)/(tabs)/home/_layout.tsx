import React from 'react'
import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native'
import { Stack } from 'expo-router'
import CorpLogoLight from '@/assets/logo/CorpLogoLight.svg'
import NotificationIcon from '@/assets/logo/VectorNotification.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const _layout = () => {
  
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <>
      <SafeAreaView className='w-full bg-white h-[13%] justify-end items-center'>
        <View className="flex-row items-center justify-end w-[85%] ">
          <View className='h-full w-[10%] '/>
          {/* <View className="h-full w-[80%] items-center justify-end">
            <CorpLogoLight width={width*0.3} height={width*0.15}/>
          </View> */}
          <View className="flex h-full w-[10%] items-center justify-end">
            <View className="items-center justify-center">
              <NotificationIcon width={width*0.06} height={width*0.06}/>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="query" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default _layout