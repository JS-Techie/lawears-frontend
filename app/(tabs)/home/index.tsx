import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Button, Card } from 'react-native-paper'
import React from 'react'

import QuestionChatIcon from '../../../assets/logo/GroupQuestionLogoHomePageAskYourLegalQueries.svg'
import ButtonRoundCircle from '../../../assets/logo/ButtonsRoundCircle.svg'
import { Link } from 'expo-router'
import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'

const home = () => {
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  return (
    <View className='bg-white h-[100%] items-center'>
      <View className='w-[85%] h-[100%]'>
        <View className="h-[15%] justify-center items-start">
          <Text>
            <Text className='text-center text-Neutral-1 font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*23)}}>Hi </Text>
            <Text className='text-center text-Blue-3 font-cbold' style={{fontSize: Math.round(fontScaledSizeRatio*23)}}>John!</Text>
          </Text>
        </View>
        <Card className='h-[30%] bg-Neutral-10 rounded-xl shadow-none'>
          <View className='flex-row justify-evenly items-center h-[40%] bg-white rounded-xl mx-[5%] mt-[5%] mb-[2.5%] shadow-none'>
            <QuestionChatIcon height={width*0.13} width={width*0.13}/>
            <Text className='font-cbold text-Neutral-3' style={{fontSize: Math.round(fontScaledSizeRatio*14)}}>Ask your legal queries</Text>
          </View>
          <View className='flex-row justify-between items-center h-[40%] rounded-xl mx-[5%] mb-[5%] mt-[2.5%] shadow-none'>
            <Text className='font-cmedium text-Neutral-6 w-[70%] text-start' style={{fontSize: Math.round(fontScaledSizeRatio*11)}}>Get matched with one of our experts and get immediate legal advice</Text>
            <Link href={'(tabs)/home/query'}>
              <ButtonRoundCircle height={width*0.15} width={width*0.15}/>
            </Link>
          </View>
        </Card>
      </View> 
    </View>
  )
}

export default home