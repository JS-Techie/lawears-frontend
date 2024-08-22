import { Text, View, TouchableNativeFeedback, useWindowDimensions, PixelRatio } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button, TextInput, TouchableRipple } from 'react-native-paper'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const Homepage = () => {

  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <View className="flex-1 items-center justify-center bg-Neutral-12">
      {/* <Text className="font-cthin text-3xl text-white ">Homepage</Text>
        <Button mode='outlined'> 
          <Link href={'/signup'}>
              Press 
          </Link>     
        </Button>
        <Button mode='outlined'> 
          <Link href="/(tabs)/home">
              + Press
          </Link>     
        </Button> */}
        <View className='flex w-full items-center justify-evenly h-[20%]'>

          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[30%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row h-full w-[85%] justify-start items-center' >
              <View className='h-full w-[20%] justify-center items-end '>
                <View className='rounded-full bg-Neutral-13 items-center justify-center' style={{height: width*0.1, width: width*0.1}}>
                  <Text className='text-Neutral-12 font-cbold text-center' style={{fontSize: Math.round(fontScaledSizeRatio*24)}}><Link href='/login'>1</Link></Text>
                </View>
              </View>
              <View className='flex h-full w-[80%] items-start justify-center pl-[10%]'>
                  <Text className={`text-Neutral-13 font-cmedium`} style={{fontSize: Math.round(fontScaledSizeRatio*30)}}><Link href='/login'>Customer</Link></Text>
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[30%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row h-full w-[85%] justify-start items-center' >
              <View className='h-full w-[20%] justify-center items-end '>
                <View className='rounded-full bg-Neutral-13 items-center justify-center' style={{height: width*0.1, width: width*0.1}}>
                  <Text className='text-Neutral-12 font-cbold text-center' style={{fontSize: Math.round(fontScaledSizeRatio*24)}}>2</Text>
                </View>
              </View>
              <View className='flex h-full w-[80%] items-start justify-center pl-[10%]'>
                  <Text className={`text-Neutral-13 font-cmedium`} style={{fontSize: Math.round(fontScaledSizeRatio*30)}}>Advocate</Text>
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[30%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row h-full w-[85%] justify-start items-center' >
              <View className='h-full w-[20%] justify-center items-end '>
                <View className='rounded-full bg-Neutral-13 items-center justify-center' style={{height: width*0.1, width: width*0.1}}>
                  <Text className='text-Neutral-12 font-cbold text-center' style={{fontSize: Math.round(fontScaledSizeRatio*24)}}>3</Text>
                </View>
              </View>
              <View className='flex h-full w-[80%] items-start justify-center pl-[10%]'>
                  <Text className={`text-Neutral-13 font-cmedium`} style={{fontSize: Math.round(fontScaledSizeRatio*30)}}>LawEar</Text>
              </View>
            </View>
          </TouchableRipple>

        </View>

    </View>
  )
}

export default Homepage



