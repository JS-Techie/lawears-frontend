
import { Text, View, KeyboardAvoidingView, Platform, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { TextInput, Button, Checkbox  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'
import { Link } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const signup = () => {
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <KeyboardAvoidingView className="h-[100%] bg-white">
        <View className="h-[13%] flex pt-[10%] items-center">
            <CorpLogoLight width={width*0.3} height={width*0.15}/>
        </View>
        <View className="h-[15%] justify-center items-center">
          <Text className='text-center text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>Sign up and get</Text>
          <Text className='text-center text-Blue-3 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>Trustworthy legal advice</Text>
          <Text className='text-center text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*17)}}>whenever you need it</Text>
        </View>
        <KeyboardAvoidingView behavior='padding' className="h-[50%] justify-center items-center">
          <TextInput className='w-[85%] my-[3%]' label='Name' placeholder='Enter Full Name'/>
          <TextInput className='w-[85%] my-[3%]' label='Phone Number' keyboardType='numeric' maxLength={10} placeholder='Enter Phone Number'/>
          <TextInput className='w-[85%] my-[3%]' label='Email ID' placeholder='Enter Email Id'/>
          <TextInput className='w-[85%] my-[3%]' label='Password' placeholder='Enter Password'/>
        </KeyboardAvoidingView>
        <View className="h-[15%] justify-evenly items-center">
          <View className="flex flex-row items-center gap-[2%] w-[90%]">
            <View>
              <Checkbox status={'checked'} color='#008847' />
            </View>
            <Text className="font-c" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>I agree to the Terms & Conditions</Text>
          </View>
          <Button mode='contained' className='w-[85%] h-[45%] items-center justify-center' labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*12), fontFamily: 'Caros-Medium' }}>
            <Link href={'/otpverification'}>
              Verify OTP and Sign Up
            </Link>
          </Button>
        </View>
        <View className="h-[10%] justify-start items-center">
          <Text>
            <Text className="font-cmedium text-Neutral-11" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>Already have an account ? </Text>
            <Text className="font-cmedium text-secondary" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}><Link href={'/login'}>Login </Link></Text>
          </Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default signup
