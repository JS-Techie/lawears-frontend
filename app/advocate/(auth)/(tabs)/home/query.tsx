import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Button, Card, List, TextInput, Avatar, Chip, TouchableRipple } from 'react-native-paper'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'


import FontScaledSizeRatio from '@/utils/fontScaledSizeRatio'
import { queryTypeInterface } from '@/interfaces/query'

const AdvocateQueryPage = () => {
  const router = useRouter();
  const {width, height} = useWindowDimensions();
  const fontScaledSizeRatio = FontScaledSizeRatio();

  const [queryId, setQueryId] = useState(10001)
  const [queryDescription, setQueryDescription] = useState("I have some query regarding my personal land mutation procedure at Kolkata")
  const [queryType, setQueryType] = useState<queryTypeInterface[]>([{ id: 'ee15f90f-9f35-47fd-b54f-4a0ac0366fc0', title: 'Document Review' },{ id: '90aff834-bb08-473d-9f1d-8e03be3aeb2e', title: 'Dispute Resolution' }])


  const handleQueryAcceptance = () => {
    router.push("/advocate/(auth)/(tabs)/chat")
  }

  const handleQueryRejection = () => {
    router.push("/advocate/(auth)/(tabs)/home")
  }

  return (
      <View className='bg-white h-[100%] items-center pt-[5%]'>
        <View className='h-[15%] w-full justify-center items-center '>
          <Text className='text-Neutral-2 font-cbold' style={{fontSize: width*0.06}}>Query ID</Text>
          <Text className='text-Neutral-7 font-cbold' style={{fontSize: width*0.04}}>{queryId}</Text>
        </View>
        <View className='max-h-[30%] min-h-[20%] overflow-scroll w-[85%] justify-center items-center '>
          <Text className='text-Neutral-7 font-cbold' style={{fontSize: width*0.03}}>Query</Text>
          <Card className='min-h-[80%] max-h-full w-full bg-Neutral-10 rounded-xl shadow-none justify-center items-center my-[2%]'>
            <View className='flex w-[85%] h-full mx-[5%] items-start justify-between '>
                <View className='flex w-full items-center justify-between mb-[5%]'>
                  <Text className='font-c' style={{fontSize: width*0.03}}>{queryDescription}</Text>
                </View>
                <View className='flex-row flex-wrap w-full items-center justify-start '>
                  {
                    queryType.map((item, index) => (
                      <Chip
                        key={index}
                        className="mr-[2%] my-[2%] bg-primary-foreground"
                        textStyle={{color: 'white', fontFamily: 'Caros', fontSize: height*0.012}}
                      >
                        {item.title}
                      </Chip>
                    ))
                  }
                </View>
            </View>
            </Card>
        </View>
        <View className='h-[20%]'/>
        <View className='h-[20%] w-full justify-center items-center '>
          <View className='flex-row h-[85%] w-full justify-evenly items-center'>
              <View className='flex h-[40%] w-[40%] border-4 border-success-background rounded-2xl'>
                <TouchableOpacity className='flex-row h-full w-full justify-evenly items-center' onPress={handleQueryAcceptance}>
                  <View style={{height : width*0.1, width :  width*0.1}} className='border-4 border-success-background rounded-full justify-center items-center'>
                  <Text style={{fontSize : width*0.06}} className='text-success-background font-c'>✔</Text>
                  </View>
                  <Text className='font-c text-Neutral-4' style={{fontSize :  width*0.045}}>Accept</Text>
                </TouchableOpacity>
              </View>
              <View className='flex h-[40%] w-[40%] border-4 border-error-background rounded-2xl'>
                <TouchableOpacity className='flex-row h-full w-full justify-evenly items-center' onPress={handleQueryRejection}>
                  <View style={{height : width*0.1, width :  width*0.1}} className='border-4 border-error-background rounded-full justify-center items-center'>
                    <Text style={{fontSize : width*0.06}} className='text-error-background font-c'>!</Text>
                  </View>
                  <Text className='font-c text-Neutral-4' style={{fontSize :  width*0.045}}>Reject</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    )
}

export default AdvocateQueryPage