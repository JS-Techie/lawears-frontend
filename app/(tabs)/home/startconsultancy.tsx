import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput, Avatar } from 'react-native-paper'
import React from 'react'
import { useRouter } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const startconsultancy = () => {
  const router = useRouter();
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
      <View className='bg-white h-[100%] items-center'>
        <View className='w-[85%] h-[80%]'>
            <Card className='h-[20%] bg-Neutral-10 rounded-xl shadow-none justify-center items-center my-[10%]'>
                <View className='flex-row mx-auto items-center justify-center'>
                    <View className='flex-row w-[85%] mx-[5%] items-center justify-evenly'>
                        <View className='flex items-center justify-between'>
                          <Avatar.Image size={width*0.2} source={require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')}/>
                        </View>
                        <View className='flex items-start justify-center mx-[15%]'>
                            <Text className='font-cheavy text-Neutral-2 text-start' style={{fontSize: Math.round(fontScaledSizeRatio*18)}}>Dwight Schrute</Text>
                            <Text className='font-c text-Neutral-6 text-start' style={{fontSize: Math.round(fontScaledSizeRatio*12)}}>Identity Theft Lawyer</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </View> 
        <View className="h-[10%] w-full justify-end items-center">
            <Button 
            mode='contained' 
            className='w-[85%] h-[60%] items-center justify-center' 
            labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}
            onPress={()=> router.push('/(tabs)/chat/')}
            >
              Start the consult
            </Button>
          </View>
      </View>
    )
}

export default startconsultancy