import React from 'react'
import { useEffect } from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { NativeWindStyleSheet } from "nativewind";
import { PaperProvider} from 'react-native-paper';
import customPaperTheme from '@/constants/customPaperTheme';
import { LogBox } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();


const _layout = () => {
  const [fontsLoaded, error ] = useFonts({
    "Caros-Black-Italic": require('../assets/fonts/cretypeCarosBlackItalic.otf'),
    "Caros-Black": require('../assets/fonts/cretypeCarosBlack.otf'),
    "Caros-Bold-Italic": require('../assets/fonts/cretypeCarosBoldItalic.otf'),
    "Caros-Bold": require('../assets/fonts/cretypeCarosBold.otf'),
    "Caros-ExtraBold-Italic": require('../assets/fonts/cretypeCarosExtraBoldItalic.otf'),
    "Caros-ExtraBold": require('../assets/fonts/cretypeCarosExtraBold.otf'),
    "Caros-ExtraLight-Italic": require('../assets/fonts/cretypeCarosExtraLightItalic.otf'),
    "Caros-ExtraLight": require('../assets/fonts/cretypeCarosExtraLight.otf'),
    "Caros-Heavy-Italic": require('../assets/fonts/cretypeCarosHeavyItalic.otf'),
    "Caros-Heavy": require('../assets/fonts/cretypeCarosHeavy.otf'),
    "Caros-Italic": require('../assets/fonts/cretypeCarosItalic.otf'),
    "Caros-Light-Italic": require('../assets/fonts/cretypeCarosLightItalic.otf'),
    "Caros-Light": require('../assets/fonts/cretypeCarosLight.otf'),
    "Caros-Medium-Italic": require('../assets/fonts/cretypeCarosMediumItalic.otf'),
    "Caros-Medium": require('../assets/fonts/cretypeCarosMedium.otf'),
    "Caros-Thin-Italic": require('../assets/fonts/cretypeCarosThinItalic.otf'),
    "Caros-Thin": require('../assets/fonts/cretypeCarosThin.otf'),
    "Caros": require('../assets/fonts/cretypeCaros.otf'),
    "raleway": require('../assets/fonts/Raleway-BoldItalic.ttf')
  });

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error])

  if (!fontsLoaded &&  !error) return null;

  LogBox.ignoreAllLogs();


  return (
    <PaperProvider theme={customPaperTheme}>
      <Stack>
          <Stack.Screen name='index' options={{headerShown: false}}/>
          <Stack.Screen name='signup' options={{headerShown: false}}/>
          <Stack.Screen name='login' options={{headerShown: false}}/>
          <Stack.Screen name='otpverification' options={{headerShown: false}}/>
          <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
          <Stack.Screen name='advocate' options={{headerShown: false}}/>
      </Stack>
    </PaperProvider>
  )
}

export default _layout