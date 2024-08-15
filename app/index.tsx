import { Text, View, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button, TextInput, TouchableRipple } from 'react-native-paper'

const Homepage = () => {
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
        <View className='flex w-full items-center justify-evenly h-[25%]'>

          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[33%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row justify-center items-center' >
              <View className='h-[50] w-[50] rounded-full bg-Neutral-13 items-center justify-center mr-[3%]'>
                <Text className='text-Neutral-12 text-2xl font-cbold text-center'>1</Text>
              </View>
              <View className='h-[50] w-[60%] items-start justify-center '>
                <Link href={'/login'}>
                  <Text className='text-Neutral-13 font-cmedium text-6xl text-center pt-[2%]'>Customers</Text>
                </Link>
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[33%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row justify-center items-center'>
              <View className='h-[50] w-[50] rounded-full bg-Neutral-13 items-center justify-center mr-[3%]'>
                <Text className='text-Neutral-12 text-2xl font-cbold text-center'>2</Text>
              </View>
              <View className='h-[50] w-[60%] items-start justify-center '>
                <Link href={'/'}>
                  <Text className='text-Neutral-13 font-cmedium text-6xl text-center pt-[2%]'>Advocate</Text>
                </Link>
              </View>
            </View>
          </TouchableRipple>
          
          <TouchableRipple rippleColor="rgba(255, 255, 255, 0.2)" className='flex w-full h-[33%] justify-center items-center' onPress={()=> {}}>
            <View className='flex-row justify-center items-center'>
              <View className='h-[50] w-[50] rounded-full bg-Neutral-13 items-center justify-center mr-[3%]'>
                <Text className='text-Neutral-12 text-2xl font-cbold text-center'>3</Text>
              </View>
              <View className='h-[50] w-[60%] items-start justify-center '>
                <Link href={'/'}>
                  <Text className='text-Neutral-13 font-cmedium text-6xl text-center pt-[2%]'>LawEar</Text>
                </Link>
              </View>
            </View>
          </TouchableRipple>
          
        </View>

    </View>
  )
}

export default Homepage
