import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Easing, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import { Chip, Card, Avatar, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

import IndiaMap from '@/assets/logo/india.svg'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio';
import { queryTypeInterface } from '@/interfaces/query';


export default function MatchPage() {
  
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();
  const [step, setStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const blinkValues = Array.from({ length: 6 }, () => useRef(new Animated.Value(0)).current);  
  const [queryDescription, setQueryDescription] = useState("I have some query regarding my land mutation procedure at Kolkata")
  const [queryType, setQueryType] = useState<queryTypeInterface[]>([{ id: 'ee15f90f-9f35-47fd-b54f-4a0ac0366fc0', title: 'Document Review' },{ id: '90aff834-bb08-473d-9f1d-8e03be3aeb2e', title: 'Dispute Resolution' }])


  const startBlinking = (blinkValue: Animated.Value, delay: number, duration: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkValue, {
          toValue: 1,
          duration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(blinkValue, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    ).start();
  };

  useEffect(() => {
        // Start blinking for each dot with different delays and durations
        blinkValues.forEach((blinkValue, index) => {
          const delay = index * 300; // Each dot starts 200ms later
          const duration = 500 + index * 500; // Duration varies slightly for each dot
          startBlinking(blinkValue, delay, duration);
        });
      },[blinkValues])
  
  useEffect(() => {
    // Chain the loading animations for the progress bars
    const loadStep = (progress: Animated.Value, nextStep: () => void) => {
      const loadingLoop = Animated.loop(
        Animated.timing(progress, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
          easing: Easing.linear,
        })
      );
      loadingLoop.start();

      setTimeout(() => {
        loadingLoop.stop();
        Animated.timing(progress, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          nextStep();
        });
      }, 5000); // Time before moving to the next step
    };

    const startLoading = () => {
      loadStep(progress1, () => {
        setStep(1);
        loadStep(progress2, () => {
          setStep(2);
          loadStep(progress3, () => {
            setStep(3); // Final step complete
            blinkValues.forEach((blinkValue, index) => {
              blinkValue.stopAnimation(() => {
                index !=4 ? blinkValue.setValue(0) : blinkValue.setValue(1); // Set all to opacity 0
              });
            })
          });
        });
      });
    };
    startLoading();
  }, [progress1, progress2, progress3]);

  console.log("THE  STEP ::: ", step)

  return (

    <SafeAreaView className="flex-1 h-full w-full items-center bg-white">
      <View className='w-full justify-center items-center' style={{height:  width*1.2}}>
        <IndiaMap height={width*1.1} width={width*0.9}/>
      </View>
      <View className='absolute w-full' style={{height:  width*1.2}}>

        <View className='h-[40%] w-[45%] justify-end items-end'>
          <Animated.View
            key={2}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[2],
                transform: [{ scale: blinkValues[2] }],
            }}
          />
        </View>
        <View className='h-[4%] w-[22%] justify-end items-end'>
          <Animated.View
            key={3}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[3],
                transform: [{ scale: blinkValues[3] }],
            }}
          />
        </View>
        <View className='h-[6%] w-[67%] justify-end items-end'>
          <Animated.View
            key={4}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[4],
                transform: [{ scale: blinkValues[4] }],
            }}
          />
        </View>
        <View className='h-[2%] w-[35%] justify-end items-end'>
          <Animated.View
            key={5}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[5],
                transform: [{ scale: blinkValues[5] }],
            }}
          />
        </View>
        <View className='h-[10%] w-[27%] justify-end items-end'>
          <Animated.View
            key={0}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[0],
                transform: [{ scale: blinkValues[0] }],
            }}
          />
        </View>
        <View className='h-[7%] w-[38%] justify-end items-end'>
          <Animated.View
            key={1}
            className="bg-black rounded-full"
              style={{
                width: width*0.03,
                height: width*0.03,
                opacity: blinkValues[1],
                transform: [{ scale: blinkValues[1] }],
            }}
          />
        </View>
        
      </View>
      
      <View className='flex-row h-[1%] w-[85%] justify-evenly items-center' style={{marginTop: width*0.07}}>

        <View className="flex-row justify-between items-center w-[30%] h-full bg-gray-300 rounded-md overflow-hidden">
          <Animated.View
            className="h-full bg-light-blue-500"
            style={{
              width: progress1.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: step > 0 ? '#003366' : '#00bfff', // Dark blue when done, light blue otherwis
            }}
          />
        </View>
        <View className="flex-row justify-between items-center w-[30%] h-full bg-gray-300 rounded-full overflow-hidden">
          <Animated.View
            className="h-full bg-light-blue-500"
            style={{
              width: progress2.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: step > 1 ? '#003366' : '#00bfff',
            }}
          />
        </View>
        <View className="flex-row justify-between items-center w-[30%] h-full bg-gray-300 rounded-full overflow-hidden">
          <Animated.View
            className="h-full bg-light-blue-500"
            style={{
              width: progress3.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: step > 2 ? '#003366' : '#00bfff',
            }}
          />
        </View>

      </View>

      <View className='w-[85%] h-[3%] mt-[3%] justify-center items-center'>
        <Text className="text-center font-cbold text-Neutral-3" style={{fontSize : width*0.04}}>
          {step == 0 ? 'Analyzing your query and grievances' : step == 1 ? 'Finding the best legal expert for your case!' : step == 2 ? 'Checking their calender for availability!' : 'Match Found!'}
        </Text>
      </View>
      
      <View className='h-[20%] w-[85%] justify-start items-start' style={{marginTop: width*0.1}}>
        <Text className='text-Neutral-7 font-cbold pl-[1%]' style={{fontSize: width*0.03}}>Your Query</Text>
        <View className='flex h-[80%] w-full bg-Neutral-10 rounded-3xl shadow-none justify-evenly items-center my-[1%] py-[1%]'>
          <ScrollView className='flex h-[40%] max-h-[40%] w-[90%]'>
            <View className='flex w-full h-full items-center justify-between'>
              <Text className='font-c' style={{fontSize: width*0.03}}>{queryDescription}</Text>
            </View>
          </ScrollView>
          <ScrollView className='min-h-[40%] max-h-[40%] w-[90%]'>
              <View className='flex-row flex-wrap overflow-hidden w-full items-center justify-start '>
                {
                  queryType.map((item, index) => (
                    <Chip
                      key={index}
                      className="mr-[2%] my-[1%] p-[1%] bg-primary-foreground"
                      textStyle={{color: 'white', fontFamily: 'Caros', fontSize: height*0.012}}
                    >
                      {item.title}
                    </Chip>
                  ))
                }
              </View>
          </ScrollView>
        </View>
      </View>
      
      {
        step >=3 ? (
          <View className='w-[85%] h-[22%]'>
            <Text className='font-cbold pl-[1%] pb-[5%] text-Neutral-5' style={{fontSize: width*0.035}}>Best legal expert for your case!</Text>
            <View className='flex h-[90%] w-full bg-Neutral-10 rounded-2xl shadow-none justify-start items-center py-[5%]'>
                <View className='flex-row h-[50%] w-full mx-auto items-center justify-center'>
                    <View className='flex-row w-[85%] mx-[5%] items-center justify-center'>
                        <View className='flex items-center justify-evenly'>
                          <Avatar.Image size={width*0.16} source={require('@/assets/logo/8fb116150a2bba383a6ed8ecd0a216c1a6325e40_full.jpg')}/>
                        </View>
                        <View className='flex items-start justify-center mx-[10%]'>
                            <Text className='font-cheavy text-Neutral-2 text-start' style={{fontSize: Math.round(fontScaledSizeRatio*18)}}>Dwight Schrute</Text>
                            <Text className='font-c text-Neutral-6 text-start' style={{fontSize: Math.round(fontScaledSizeRatio*12)}}>Identity Theft Lawyer</Text>
                        </View>
                    </View>
                </View>
                <View className="h-[40%] w-full justify-center items-center mt-[5%]">
                  <Button 
                    mode='contained' 
                    className='w-[85%] h-full items-center justify-center' 
                    labelStyle={{ fontSize: Math.round(fontScaledSizeRatio*13), fontFamily: 'Caros-Medium' }}
                    onPress={()=> router.push('/(tabs)/home/startconsultancy')}
                  >
                    View profiles & reviews
                  </Button>
                </View>
            </View>
          </View> 
        ) : null
      }
      
    </SafeAreaView>
  );

}
