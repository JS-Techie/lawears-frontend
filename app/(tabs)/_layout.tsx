import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import HomeTabIcon from '../../assets/logo/VectorHomeTab.svg'
import ServiceTabIcon from '../../assets/logo/GroupServiceTab.svg'
import ChatTabIcon from '../../assets/logo/ChatTab.svg'
import ProfileTabIcon from '../../assets/logo/GroupProfileTab.svg'
import tailwindConfig from '@/tailwind.config'
import { TailwindConfig } from '@/interfaces/tailwindconfig'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'


const TabLayout = () => {
  
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  
  return (
    <View className='flex-1 bg-white'>
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen 
              name='home' 
              options={
                  { 
                    title: 'Home',
                    headerShown: false,
                    tabBarStyle: { 
                      height: height*0.08,
                      borderTopLeftRadius: width*0.07,
                      borderTopRightRadius: width*0.07,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15%] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <HomeTabIcon height={width*0.05} width={width*0.05} fill={focused ? color : '#000'}/>
                      </View>
                    )
                  }
                }
              />
              <Tabs.Screen 
              name='services' 
              options={
                  { 
                    title: 'Services',
                    headerShown: false,
                    tabBarStyle: { 
                      height: height*0.08,
                      borderTopLeftRadius: width*0.07,
                      borderTopRightRadius: width*0.07,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15%] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ServiceTabIcon height={width*0.05} width={width*0.05} fill={focused ? color : '#000'}/>
                      </View>
                    )
                  }
                }
              />
              <Tabs.Screen 
              name='chat' 
              options={
                  { 
                    title: 'Chat',
                    headerShown: false,
                    tabBarStyle: { 
                      height: height*0.08,
                      borderTopLeftRadius: width*0.07,
                      borderTopRightRadius: width*0.07,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15%] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ChatTabIcon height={width*0.07} width={width*0.07} fill={focused ? color : '#000'}/>
                      </View>
                    )
                  }
                }
              />
              <Tabs.Screen 
              name='profile' 
              options={
                  { 
                    title: 'Profile',
                    headerShown: false,
                    tabBarStyle: { 
                      height: height*0.08,
                      borderTopLeftRadius: width*0.07,
                      borderTopRightRadius: width*0.07,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15%] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ProfileTabIcon height={width*0.05} width={width*0.05} fill={focused ? color : '#000'}/>
                      </View>
                    )
                  }
                }
              />
        </Tabs>
    </View>
  )
}

export default TabLayout