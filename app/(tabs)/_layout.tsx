import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import HomeTabIcon from '../../assets/logo/VectorHomeTab.svg'
import ServiceTabIcon from '../../assets/logo/GroupServiceTab.svg'
import ChatTabIcon from '../../assets/logo/ChatTab.svg'
import ProfileTabIcon from '../../assets/logo/GroupProfileTab.svg'
import tailwindConfig from '@/tailwind.config'
import { TailwindConfig } from '@/interfaces/tailwindconfig'


const TabLayout = () => {
  
  return (
    <>
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen 
              name='home' 
              options={
                  { 
                    title: 'Home',
                    headerShown: false,
                    tabBarStyle: { 
                      height: 70,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15px] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <HomeTabIcon height={20} width={20} fill={focused ? color : '#000'}/>
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
                      height: 70,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15px] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ServiceTabIcon height={20} width={20} fill={focused ? color : '#000'}/>
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
                      height: 70,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15px] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ChatTabIcon height={27} width={27} fill={focused ? color : '#000'}/>
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
                      height: 70,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25,
                      backgroundColor: '#F1F1F1'
                    },
                    tabBarIcon: ({color, focused}) => (
                      <View className={`p-[15px] rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
                        {/* <Image source= {icon} tintColor={focused ? color : tailwindConfig?.theme?.extend?.colors?.Neutral['0'] } resizeMode='contain' className='h-6 w-6'/> */}
                        <ProfileTabIcon height={20} width={20} fill={focused ? color : '#000'}/>
                      </View>
                    )
                  }
                }
              />
        </Tabs>
    </>
  )
}

export default TabLayout