import { Text, View, KeyboardAvoidingView, Platform, Image} from 'react-native'
import { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import { TextInput, Button, Card  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'
import OTPVerificationErrorExclamation from '../assets/logo/VectorOTPVerificationErrorExclamation.svg'
import OTPVerificationSuccessfulCheck from '../assets/logo/VectorOTPVerificationSuccessfulCheck.svg' 
import { Link } from 'expo-router'

const otpverification = () => {
  const [otp, setOtp] = useState('');
  const [otpVerificationSuccess, setOtpVerificationSuccess] = useState(false);
  const [showOTPVerificationStatusBar, setShowOTPVerificationStatusBar] = useState(false);
  const [firstOtpLetter, setFirstOtpLetter] = useState('')
  const [secondOtpLetter, setSecondOtpLetter] = useState('')
  const [thirdOtpLetter, setThirdOtpLetter] = useState('')
  const [forthOtpLetter, setForthOtpLetter] = useState('')

  
  useEffect(() => {
    setOtp(firstOtpLetter + secondOtpLetter + thirdOtpLetter + forthOtpLetter)
    setShowOTPVerificationStatusBar(false)
  },[firstOtpLetter, secondOtpLetter, thirdOtpLetter, forthOtpLetter])

  const handleOTPSubmit = () => {
    setShowOTPVerificationStatusBar(true)
    otp === '5555' ? setOtpVerificationSuccess(true) : setOtpVerificationSuccess(false)
  }

  
  return (
    <KeyboardAvoidingView className="h-[100%] bg-white">
        <View className="h-[10%] flex pt-10 items-center">
            <CorpLogoLight width={130} height={75}/>
        </View>
        <View className="h-[15%] justify-center items-center">
          <Text className='text-center text-4xl text-Neutral-1 font-cmedium'>OTP Verification</Text>
          <Text>
            <Text className='text-center text-xl text-Neutral-7 font-cmedium'>Enter the OTP sent to </Text>
            <Text className='text-center text-xl text-Neutral-1 font-cmedium'>+91 9876543210</Text>
          </Text>
        </View>
        <View className='h-[5%] flex-row items-center justify-center space-x-3 mb-10'>
          <TextInput className={`rounded-md text-center text-lg ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setFirstOtpLetter(e))}/> 
          <TextInput className={`rounded-md text-center text-lg ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setSecondOtpLetter(e))}/>
          <TextInput className={`rounded-md text-center text-lg ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setThirdOtpLetter(e))}/>
          <TextInput className={`rounded-md text-center text-lg ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setForthOtpLetter(e))}/>
        </View>

        {
          showOTPVerificationStatusBar && otpVerificationSuccess ? (
            <View className='h-[15%] flex items-center justify-between'>
              <Card className='bg-success-background w-[85%] rounded-md p-10 shadow-none'>
                <View className='flex-row justify-center items-center'>
                  <View className='flex items-start justify-start -mt-8'>
                    <OTPVerificationSuccessfulCheck height={30} width={30}/>
                  </View>
                  <View className='flex items-start justify-start ml-5'>
                    <Text className='text-xl text-success-foreground font-cbold'>OTP verified and account created successfully</Text>
                    <Text className='text-lg text-Neutral-0 font-cmedium'>Please Proceed to Login</Text>
                  </View>
                </View>            
              </Card>
            </View>
          ) : showOTPVerificationStatusBar && !otpVerificationSuccess ? (
            <View className='h-[15%] flex items-center justify-between'>
              <Card className='bg-error-background w-[85%] rounded-md p-10 shadow-none'>
                <View className='flex-row justify-center items-center'>
                  <View className='flex items-start justify-start -mt-5'>
                    <OTPVerificationErrorExclamation height={30} width={30}/>
                  </View>
                  <View className='flex items-start justify-start ml-5'>
                    <Text className='text-xl text-error font-cbold'>The OTP you've entered is incorrect</Text>
                    <Text className='text-lg text-Neutral-0 font-cmedium'>Please try again or resend</Text>
                  </View>
                </View>            
              </Card>
            </View> 
          ) : null
        }

        
        <View className="h-[15%] justify-evenly items-center">
          {
            !otpVerificationSuccess ? 
                <Button 
                    mode='contained' 
                    className='w-[85%] h-[45%] items-center justify-center' 
                    labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}
                    onPress={handleOTPSubmit}
                    >
                  <Link href={'/otpverification'}>
                    Submit
                  </Link>
                </Button>
            :
                <Button 
                    mode='contained' 
                    className='w-[85%] h-[45%] items-center justify-center' 
                    labelStyle={{ fontSize: 19, fontFamily: 'Caros-Medium' }}
                    onPress={handleOTPSubmit}
                    >
                  <Link href={'/otpverification'}>
                    Login
                  </Link>
                </Button>
          }
        </View>
        <View className="h-[10%] justify-start items-center">
          <Text>
            <Text className="font-cmedium text-Neutral-11">Didn't receive OTP ? </Text>
            <Text className="font-cmedium text-secondary">Resend </Text>
          </Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default otpverification