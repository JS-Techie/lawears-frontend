
import React, { useState } from 'react';
import { Alert, Text, View, useWindowDimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import CorpLogoLight from '../assets/logo/CorpLogoLight.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import apiRequest from '@/api';
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const { width } = useWindowDimensions();

  const fontScaledSizeRatio = FontScaledSizeRatio();
  const router = useRouter(); 
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await apiRequest('/auth/login', 'POST', {
        email_id: username,
        password: password,
      });

      if (response.success) {
        console.log('Access token:', response.data.access_token);

        console.log("CURRENT USER ROLE : ",response.data.role)
        
        await AsyncStorage.setItem('access_token', response.data.access_token);
        await AsyncStorage.setItem('current_user', response.data.user);
        await AsyncStorage.setItem('user_role', response.data.role);



        if (response.data.role == 'CUSTOMER'){
          router.replace('/home');
        }else{
          router.replace('/advocate/home');
        }
 
       
      } else {
        Alert.alert(response.dev_msg, response.client_msg, [
          { text: 'OK', onPress: () => {
            setUsername('')
            setPassword('')
          }},
        ]);
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="h-[13%] flex pt-[10%] items-center">
        <CorpLogoLight width={width * 0.3} height={width * 0.15} />
      </View>
      <View className="h-[13%] w-full justify-center items-center">
        <Text>
          <Text className='text-center text-Neutral-1 font-cmedium' style={{ fontSize: Math.round(fontScaledSizeRatio * 17) }}>Login and </Text>
          <Text className='text-center text-Blue-3 font-cmedium' style={{ fontSize: Math.round(fontScaledSizeRatio * 17) }}>get expert legal</Text>
        </Text>
        <Text>
          <Text className='text-center text-Blue-3 font-cmedium' style={{ fontSize: Math.round(fontScaledSizeRatio * 17) }}>advice </Text>
          <Text className='text-center text-Neutral-1 font-cmedium' style={{ fontSize: Math.round(fontScaledSizeRatio * 17) }}>with a few clicks</Text>
        </Text>
      </View>
      <View className="h-[20%] justify-center items-center my-[7%]">
        <TextInput
          className='w-[85%] mb-[7%]'
          label='Email Id'
          placeholder='Enter registered email ID'
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          className='w-[85%]'
          label='Password'
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder='Enter password'
        />
        <Text className='underline text-Blue-0 text-base mt-[1%] w-[85%] text-right' style={{ fontSize: Math.round(fontScaledSizeRatio * 10) }}>Forgot Password ?</Text>
      </View>
      <View className="h-[10%] justify-end items-center">
        <Button
          mode='contained'
          className='w-[85%] h-[60%] items-center justify-center'
          labelStyle={{ fontSize: Math.round(fontScaledSizeRatio * 13), fontFamily: 'Caros-Medium' }}
          onPress={handleLogin}
        >
          Login
        </Button>
      </View>
      <View className="h-[5%] justify-center items-center">
        <Text>
          <Text className="font-cmedium text-Neutral-11" style={{ fontSize: Math.round(fontScaledSizeRatio * 10) }}>Don't have an account ? </Text>
          <Text className="font-cmedium text-secondary" style={{ fontSize: Math.round(fontScaledSizeRatio * 10) }}>
            <Link href={'/signup'}>Sign Up </Link>
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

     
