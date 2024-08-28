
import { Text, View, KeyboardAvoidingView, Platform, Image, useWindowDimensions} from 'react-native'
import { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import { TextInput, Button, Card  } from 'react-native-paper'
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg'
import OTPVerificationErrorExclamation from '../assets/logo/VectorOTPVerificationErrorExclamation.svg'
import OTPVerificationSuccessfulCheck from '../assets/logo/VectorOTPVerificationSuccessfulCheck.svg' 
import { Link } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const otpverification = () => {
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
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
        <View className="h-[13%] flex pt-[10%] items-center">
            <CorpLogoLight width={width*0.3} height={width*0.15}/>
        </View>
        <View className="h-[15%] justify-center items-center">
          <Text className='text-center text-Neutral-1 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*21)}}>OTP Verification</Text>
          <Text>
            <Text className='text-center text-Neutral-7 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Enter the OTP sent to </Text>
            <Text className='text-center text-Neutral-1 font-cmedium'style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>+91 9876543210</Text>
          </Text>
        </View>
        <View className='h-[5%] flex-row items-center justify-center space-x-3 mb-[10%]'>
          <TextInput className={`rounded-md text-center ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} style={{fontSize: Math.round(fontScaledSizeRatio*13)}} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setFirstOtpLetter(e))}/> 
          <TextInput className={`rounded-md text-center ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} style={{fontSize: Math.round(fontScaledSizeRatio*13)}} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setSecondOtpLetter(e))}/>
          <TextInput className={`rounded-md text-center ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} style={{fontSize: Math.round(fontScaledSizeRatio*13)}} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setThirdOtpLetter(e))}/>
          <TextInput className={`rounded-md text-center ${showOTPVerificationStatusBar && otpVerificationSuccess ? 'border border-success' : showOTPVerificationStatusBar && !otpVerificationSuccess ? 'border border-error' : 'border-none' }`} style={{fontSize: Math.round(fontScaledSizeRatio*13)}} keyboardType='numeric' maxLength={1} onChangeText={(e) => (setForthOtpLetter(e))}/>
        </View>

        {
          showOTPVerificationStatusBar && otpVerificationSuccess ? (
            <View className='h-[15%] flex items-center justify-between'>
              <Card className='bg-success-background w-[85%] rounded-md p-[7%] shadow-none'>
                <View className='flex-row justify-center items-center'>
                  <View className='flex items-start justify-start -mt-[5%]'>
                    <OTPVerificationSuccessfulCheck height={width*0.08} width={width*0.08}/>
                  </View>
                  <View className='flex items-start justify-start ml-[10%]'>
                    <Text className='text-success-foreground font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>OTP verified and account created successfully</Text>
                    <Text className='text-Neutral-0 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Please Proceed to Login</Text>
                  </View>
                </View>            
              </Card>
            </View>
          ) : showOTPVerificationStatusBar && !otpVerificationSuccess ? (
            <View className='h-[15%] flex items-center justify-between'>
              <Card className='bg-error-background w-[85%] rounded-md p-[7%] shadow-none'>
                <View className='flex-row justify-center items-center'>
                  <View className='flex items-start justify-start -mt-[5%]'>
                    <OTPVerificationErrorExclamation height={width*0.08} width={width*0.08}/>
                  </View>
                  <View className='flex items-start justify-start ml-[10%]'>
                    <Text className='text-error font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*13)}}>The OTP you've entered is incorrect</Text>
                    <Text className='text-Neutral-0 font-cmedium' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Please try again or resend</Text>
                  </View>
                </View>            
              </Card>
            </View> 
          ) : null
        }

        
        <View className="h-[10%] justify-end items-center">
          {
            !otpVerificationSuccess ? 
                <Button 
                    mode='contained' 
                    className='w-[85%] h-[60%] items-center justify-center' 
                    labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}
                    onPress={handleOTPSubmit}
                    >
                    Submit
                </Button>
            :
                <Button 
                    mode='contained' 
                    className='w-[85%] h-[60%] items-center justify-center' 
                    labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}
                    onPress={handleOTPSubmit}
                    >
                  <Link href={'/login'}>
                    Login
                  </Link>
                </Button>
          }
        </View>
        <View className="h-[5%] justify-center items-center">
          <Text>
            <Text className="font-cmedium text-Neutral-11" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>Didn't receive OTP ? </Text>
            <Text className="font-cmedium text-secondary" style={{fontSize: Math.round(fontScaledSizeRatio*10)}}>Resend </Text>
          </Text>
        </View>
    </KeyboardAvoidingView>
  )
}

export default otpverification