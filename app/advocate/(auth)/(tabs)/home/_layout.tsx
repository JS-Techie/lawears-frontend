import React from 'react';
import { View, useWindowDimensions, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import CorpLogoLight from '@/assets/logo/CorpLogoLight.svg';
import NotificationIcon from '@/assets/logo/VectorNotification.svg';
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';

const Layout = () => {
  const { width } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="query" />
      </Stack>
    </View>
  );
};

export default Layout;