
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView, View, Text, useWindowDimensions } from 'react-native'
import { Avatar } from 'react-native-paper'

import CloseButton from '@/assets/logo/VectorcloseButton.svg'
import EastBackButton from '@/assets/logo/eastbackButton.svg'
import InfoButton from '@/assets/logo/VectorinfoIcon.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const _layout = () => {
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <>
      <SafeAreaView className='h-[15%] bg-Blue-4'>
          <View className='flex-row mt-[10%] mx-[3%] items-center justify-center'>
              <EastBackButton height={width*.06} width={width*.06}/>
              <View className='flex-row w-[60%] mx-[5%] items-center justify-start'>
                  <View className='flex items-center justify-evenly border-4 border-Blue-5 rounded-full'>
                    <Avatar.Image size={width*0.17} source={require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')}/>
                  </View>
                  <View className='flex items-start justify-center mx-[1%]'>
                      <Text className='font-cbold text-Neutral-2 text-start' style={{fontSize: Math.round(fontScaledSizeRatio*17.5)}}>Dwight Schrute</Text>
                      <Text className='font-c text-primary-background text-start' style={{fontSize: Math.round(fontScaledSizeRatio*12)}}>Identity Theft Lawyer</Text>
                  </View>
              </View>
              <View className='flex mr-[5%]'>
                  <InfoButton height={width*0.05} width={width*0.05}/>
              </View>
              <View className='flex mr-[5%]'>
                  <CloseButton height={width*0.05} width={width*0.05}/>
              </View>
          </View>
      </SafeAreaView>
      
      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
      </Stack>      
    </>
  )
}

export default _layout