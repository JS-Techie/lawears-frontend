import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { SvgProps } from 'react-native-svg';
import HomeTabIcon from '@/assets/logo/VectorHomeTab.svg';
import ServiceTabIcon from '@/assets/logo/GroupServiceTab.svg';
import ChatTabIcon from '@/assets/logo/ChatTab.svg';
import ProfileTabIcon from '@/assets/logo/GroupProfileTab.svg';

type TabIconProps = {
  color: string;
  focused: boolean;
};

const TabLayout: React.FC = () => {
  const { width, height } = useWindowDimensions();
  
  const tabBarHeight = height * 0.08;
  const iconSize = Math.min(width * 0.05, tabBarHeight * 0.5);

  const getTabOptions = (Icon: React.FC<SvgProps>, title: string) => ({
    title,
    headerShown: false,
    tabBarStyle: { 
      height: tabBarHeight,
      borderTopLeftRadius: width * 0.07,
      borderTopRightRadius: width * 0.07,
      backgroundColor: '#F1F1F1'
    },
    tabBarIcon: ({ color, focused }: TabIconProps) => (
      <View className={`p-2 rounded-md ${focused ? 'bg-white' : 'bg-[#f1f1f1]'}`}>
        <Icon 
          width={iconSize} 
          height={iconSize} 
          fill={focused ? '#00397b' : '#000'}
        />
      </View>
    ),
    tabBarLabelStyle: {
      fontSize: 12,
    },
  });

  return (
    <View className='flex-1 bg-white'>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#00397b',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: { 
            height: tabBarHeight,
            borderTopLeftRadius: width * 0.07,
            borderTopRightRadius: width * 0.07,
            backgroundColor: '#F1F1F1',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: 10,
            paddingHorizontal: 10,
          },
        }}
      >
        <Tabs.Screen name='home' options={getTabOptions(HomeTabIcon, 'Home')} />
        <Tabs.Screen name='services' options={getTabOptions(ServiceTabIcon, 'Services')} />
        <Tabs.Screen name='profile' options={getTabOptions(ProfileTabIcon, 'Profile')} />
        <Tabs.Screen name='chat' options={getTabOptions(ChatTabIcon, 'Chat')} />
      </Tabs>
    </View>
  );
};

export default TabLayout;