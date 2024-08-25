
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput, Avatar, Divider } from 'react-native-paper'
import React from 'react'
import { Link } from 'expo-router'

import RightGoIcon from '@/assets/logo/arrow_forward_iosRightGo.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const profile = () => {
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
      <View className='bg-white h-[100%] items-center'>
        <View className='w-[85%] h-[100%]'>
          <View className='flex mt-[10%] justify-center items-center'>
            <Avatar.Image size={width*0.01} className='border-8 border-Blue-5 rounded-full' style={{height: width*0.25, width: width*0.25}}/>
            <Text className='font-cbold text-Neutral-2 mt-[5%]'  style={{fontSize: Math.round(fontScaledSizeRatio*20)}}>John Doe</Text>
            <Text className='font-cmedium text-Blue-0' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>johndoe@gmail.com</Text>
          </View>
          
            <Card className='flex h-[40%] bg-Neutral-10 rounded-xl shadow-none justify-center items-center mt-[10%]'>
              <View className='flex w-full h-[85%] mt-[5%] justify-between items-center'>
                  <View className='flex-row w-[85%] justify-between items-center'>
                    <View>
                      <Text className='font-cmedium text-Neutral-2' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>Edit Profile</Text>
                    </View>
                    <View>
                      <RightGoIcon height={width*0.04} width={width*0.04}/>
                    </View>
                  </View>
                  <Divider style={{height: width*0.002, width: width*0.8}}/>
                  <View className='flex-row w-[85%] justify-between items-center'>
                    <View>
                      <Text className='font-cmedium text-Neutral-2' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>My Consults</Text>
                    </View>
                    <View>
                      <RightGoIcon height={width*0.04} width={width*0.04}/>
                    </View>
                  </View>
                  <Divider style={{height: width*0.002, width: width*0.8}}/>
                  <View className='flex-row w-[85%] justify-between items-center'>
                    <View>
                      <Text className='font-cmedium text-Neutral-2' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>Change Password</Text>
                    </View>
                    <View>
                      <RightGoIcon height={width*0.04} width={width*0.04}/>
                    </View>
                  </View>
                  <Divider style={{height: width*0.002, width: width*0.8}}/>
                  <View className='flex-row w-[85%] justify-between items-center'>
                    <View>
                      <Text className='font-cmedium text-Neutral-2' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>Privacy Policy</Text>
                    </View>
                    <View>
                      <RightGoIcon height={width*0.04} width={width*0.04}/>
                    </View>
                  </View>
                  <Divider style={{height: width*0.002, width: width*0.8}}/>
                  <View className='flex-row w-[85%] justify-between items-center'>
                    <View>
                      <Text className='font-cmedium text-Neutral-2' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>Help and Support</Text>
                    </View>
                    <View>
                      <RightGoIcon height={width*0.04} width={width*0.04}/>
                    </View>
                  </View>
              </View>
            </Card>

            <View className="h-[15%] justify-end items-center">
              <Button mode='outlined' className='w-full h-[60%] items-center justify-center' labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}>
                <Link href={'/home'}>
                  Logout
                </Link>
              </Button>
            </View>
        </View> 
      </View>
    )
}

export default profile