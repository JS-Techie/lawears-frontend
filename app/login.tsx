import { Text, View, KeyboardAvoidingView, Platform, Image, useWindowDimensions} from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import { TextInput, Button, Checkbox  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'
import PasswordEyeClosed from '../assets/logo/PasswordEyeClosed.svg'
import { Link } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'


import { login } from '@/api/auth'

const Login = () => {
  const router = useRouter();
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const [showPassword, setShowPassword] = useState(false); 

  const handleLogin = async () => {
    const loginRequest = {
      email_id: 'one@one.com',
      password: '1234',
    };
  
    const [response, status] = await login(loginRequest);
    if(status) {
      console.log(response.status)
      // if(response && response.status == 200)
        router.push('/home');
    }
  };
  

  return (
      <KeyboardAvoidingView className="h-full bg-white">
          <View className="h-[13%] flex pt-[10%] items-center">
            <CorpLogoLight width={width*0.3} height={width*0.15}/>
          </View>
          <View className="h-[13%] w-full justify-center items-center">
            <Text>
              <Text className='text-center text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>Login and </Text>
              <Text className='text-center text-Blue-3 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>get expert legal</Text>
            </Text>
            <Text>
              <Text className='text-center text-Blue-3 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>advice </Text>
              <Text className='text-center text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>with a few clicks</Text>
            </Text>
          </View>
          <View className="h-[20%] justify-center items-center my-[7%]">
            <TextInput className='w-[85%] mb-[7%]' label='Phone Number' keyboardType='numeric' maxLength={10} placeholder='Enter registered phone number'/>
            <TextInput 
                className='w-[85%]' 
                label='Password' 
                secureTextEntry={!showPassword} 
                right={
                        <TextInput.Icon
                          icon={showPassword ?  'eye-off': 'eye'}
                          onPress={() => setShowPassword(!showPassword)}
                        />
                      } 
                placeholder='Enter password'/>
            <Text className='underline text-Blue-0 text-base mt-[1%] w-[85%] text-right' style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>Forgot Password ?</Text>
          </View>
          <View className="h-[10%] justify-end items-center">
            <Button 
            mode='contained' 
            className='w-[85%] h-[60%] items-center justify-center' 
            labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}
            onPress={handleLogin}
            >
              Login
            </Button>
          </View>
          <View className="h-[5%] justify-center items-center">
            <Text>
              <Text className="font-cmedium text-Neutral-11" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>Don't have an account ? </Text>
              <Text className="font-cmedium text-secondary"  style={{fontSize: Math.round(fontScaledSizeRatio*10)}}><Link href={'/signup'}>Sign Up </Link></Text>
            </Text>
          </View>
      </KeyboardAvoidingView>
    )
}

export default Login