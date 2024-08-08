import { Text, View, KeyboardAvoidingView, Platform, Image} from 'react-native'
import React from 'react'
import { TextInput, Button, Checkbox  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'

const signup = () => {
  return (
    <View className="h-[100%] bg-white">
        <View className="h-[10%] flex pt-10 items-center">
            <CorpLogoLight width={130} height={75}/>
        </View>
        <View className="h-[15%] justify-center items-center">
          <Text className='text-center text-3xl text-Neutral-1 font-cmedium'>Sign up and get</Text>
          <Text className='text-center text-3xl text-Blue-3 font-cmedium'>Trustworthy legal advice</Text>
          <Text className='text-center text-3xl text-Neutral-1 font-cmedium'>whenever you need it</Text>
        </View>
        <View className="h-[50%] justify-center items-center py-10">
          <TextInput className='w-[85%] my-5' label='Name' placeholder='Enter Full Name'/>
          <TextInput className='w-[85%] my-5' label='Phone Number' placeholder='Enter Phone Number'/>
          <TextInput className='w-[85%] my-5' label='Email ID' placeholder='Enter Email Id'/>
          <TextInput className='w-[85%] my-5' label='Password' placeholder='Enter Password'/>
        </View>
        <View className="h-[15%] justify-evenly items-center">
        <View className="flex flex-row items-center gap-2 w-[90%]">
          <View className="">
            <Checkbox status={'checked'} color='#008847' />
          </View>
          <Text className="font-c">I agree to the Terms & Conditions</Text>
        </View>
          <Button mode='contained' className='w-[85%] h-[45%] items-center justify-center' labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}>Verify OTP and Sign Up</Button>
        </View>
        <View className="h-[10%] justify-start items-center">
          <Text>
            <Text className="font-cmedium text-Neutral-11">Already have an account ? </Text>
            <Text className="font-cmedium text-secondary">Login </Text>
          </Text>
        </View>
    </View>
  )
}

export default signup