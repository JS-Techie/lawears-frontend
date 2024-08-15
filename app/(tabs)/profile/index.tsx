
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, List, TextInput, Avatar, Divider } from 'react-native-paper'
import React from 'react'
import { Link } from 'expo-router'

import RightGoIcon from '../../../assets/logo/arrow_forward_iosRightGo.svg'

const profile = () => {
return (
    <View className='bg-white h-[100%] items-center'>
      <View className='w-[85%] h-[100%]'>
        <View className='flex mt-[10%] justify-center items-center'>
          <Avatar.Image size={70} className='h-[100] w-[100] border-8 border-Blue-5 rounded-full'/>
          <Text className='text-3xl font-cbold text-Neutral-2 mt-[5%]'>John Doe</Text>
          <Text className='text-lg font-cmedium text-Blue-0'>johndoe@gmail.com</Text>
        </View>
        
          <Card className='flex h-[40%] bg-Neutral-10 rounded-xl shadow-none justify-center items-center mt-[10%]'>
            <View className='flex w-full h-[85%] justify-between items-center'>
                <View className='flex-row w-[85%] justify-between items-center'>
                  <View>
                    <Text className='text-xl font-cmedium text-Neutral-2'>Edit Profile</Text>
                  </View>
                  <View>
                    <RightGoIcon height={20} width={20}/>
                  </View>
                </View>
                <View className='flex-row w-[85%] justify-between items-center'>
                  <View>
                    <Text className='text-xl font-cmedium text-Neutral-2'>My Consults</Text>
                  </View>
                  <View>
                    <RightGoIcon height={20} width={20}/>
                  </View>
                </View>
                <View className='flex-row w-[85%] justify-between items-center'>
                  <View>
                    <Text className='text-xl font-cmedium text-Neutral-2'>Change Password</Text>
                  </View>
                  <View>
                    <RightGoIcon height={20} width={20}/>
                  </View>
                </View>
                <View className='flex-row w-[85%] justify-between items-center'>
                  <View>
                    <Text className='text-xl font-cmedium text-Neutral-2'>Privacy Policy</Text>
                  </View>
                  <View>
                    <RightGoIcon height={20} width={20}/>
                  </View>
                </View>
                <View className='flex-row w-[85%] justify-between items-center'>
                  <View>
                    <Text className='text-xl font-cmedium text-Neutral-2'>Help and Support</Text>
                  </View>
                  <View>
                    <RightGoIcon height={20} width={20}/>
                  </View>
                </View>
            </View>
          </Card>

          <View className="h-[15%] justify-end items-center">
            <Button mode='outlined' className='w-full h-[60%] items-center justify-center' labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}>
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