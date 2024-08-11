import { Text, View, KeyboardAvoidingView, Platform, Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput, Button, Checkbox  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'
import PasswordEyeClosed from '../assets/logo/PasswordEyeClosed.svg'
import { Link } from 'expo-router'

const login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  return (
      <KeyboardAvoidingView className="h-[100%] bg-white">
          <View className="h-[10%] flex pt-10 items-center">
              <CorpLogoLight width={130} height={75}/>
          </View>
          <View className="h-[13%] justify-center items-center">
            <Text>
              <Text className='text-center text-3xl text-Neutral-1 font-cmedium'>Login and </Text>
              <Text className='text-center text-3xl text-Blue-3 font-cmedium'>get expert legal</Text>
            </Text>
            <Text>
              <Text className='text-center text-3xl text-Blue-3 font-cmedium'>advice </Text>
              <Text className='text-center text-3xl text-Neutral-1 font-cmedium'>with a few clicks</Text>
            </Text>
          </View>
          <View className="h-[20%] justify-center items-center py-10">
            <TextInput className='w-[85%] my-5' label='Phone Number' keyboardType='numeric' maxLength={10} placeholder='Enter registered phone number'/>
            <TextInput 
                className='w-[85%] my-5' 
                label='Password' 
                secureTextEntry={!showPassword} 
                right={
                        <TextInput.Icon
                          icon={showPassword ?  'eye-off': 'eye'}
                          onPress={() => setShowPassword(!showPassword)}
                        />
                      } 
                placeholder='Enter password'/>
            <Text className='underline text-Blue-0 text-base -mt-[2%] w-[85%] text-right'>Forgot Password ?</Text>
          </View>
          <View className="h-[10%] justify-end items-center">
            <Button mode='contained' className='w-[85%] h-[60%] items-center justify-center' labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}>
              <Link href={'/home'}>
                Login
              </Link>
            </Button>
          </View>
          <View className="h-[5%] justify-center items-center">
            <Text>
              <Text className="font-cmedium text-Neutral-11">Don't have an account ? </Text>
              <Text className="font-cmedium text-secondary"><Link href={'/signup'}>Sign Up </Link></Text>
            </Text>
          </View>
      </KeyboardAvoidingView>
    )
}

export default login