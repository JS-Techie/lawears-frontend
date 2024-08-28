import React from 'react';
import { View, SafeAreaView, useWindowDimensions, Pressable } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SvgProps } from 'react-native-svg';
import { ArrowLeft } from 'lucide-react-native';
import CorpLogoLight from '../../../assets/logo/CorpLogoLight.svg';
import NotificationIcon from '../../../assets/logo/VectorNotification.svg';
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';

const HomeLayout: React.FC = () => {
  const { width } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full bg-white justify-end items-center py-2">
        <View className="flex-row items-center justify-between w-[90%]">
          <Pressable onPress={handleBackPress} className="flex-1 items-start justify-center">
            <ArrowLeft size={24} color="#00397b" className='cursor-pointer'/>
          </Pressable>
          <View className="flex-[4] items-center justify-center">
            <CorpLogoLight width={width * 0.3} height={width * 0.15} />
          </View>
          <View className="flex-1 items-center justify-center">
            <NotificationIcon width={width * 0.06} height={width * 0.06} />
          </View>
        </View>
      </View>

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="query" options={{ headerShown: false }} />
        <Stack.Screen name="reviewquery" options={{ headerShown: false }} />
        <Stack.Screen name="startconsultancy" options={{ headerShown: false }} />
        <Stack.Screen name="matching" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};

export default HomeLayout;