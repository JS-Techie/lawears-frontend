import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import CorpLogoLight from '../../../assets/logo/CorpLogoLight.svg'
import NotificationIcon from '../../../assets/logo/VectorNotification.svg'

const _layout = () => {
  return (
    <>
      <SafeAreaView className='w-full bg-white h-[13%] justify-end items-center'>
        <View className="flex-row items-center justify-center w-[85%] ">
          <View className='w-[10%] '/>
          <View className="w-[80%] items-center justify-center ">
            <CorpLogoLight width={130} height={75}/>
          </View>
          <View className="w-[10%]items-center justify-center ">
            <NotificationIcon width={30} height={30}/>
          </View>
        </View>
      </SafeAreaView>

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default _layout