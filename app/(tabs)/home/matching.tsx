import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { ArrowLeft, Bell } from 'lucide-react-native'

const Matching = () => {
    return (
        <View className='flex flex-col items-center justify-start gap-10 bg-white py-2 '>
            <View className='flex-row w-screen items-center justify-between p-4'>
                <ArrowLeft className='text-[#00397b]' />

                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={{ width: 100, height: 50 }}
                    contentFit='fill'
                />
                <Bell className='text-[#00397b]' fill='#00397b' />
            </View>
            <View className='flex items-center justify-center'>
                <Image
                    source={require('../../../assets/images/map.png')}
                    style={{ width: 350, height: 400 }}
                    contentFit='fill'
                />
            </View>

            <View className='flex flex-col gap-3 animate-pulse'>
                <View className="flex-row w-4/5 gap-2 items-center justify-between">
                    <View className="h-2 w-1/3 bg-[#00397b] rounded-lg items-center justify-center">

                    </View>
                    <View className="h-2 w-1/3 bg-[#CDDEFF] rounded-lg items-center justify-center">

                    </View>
                    <View className="h-2 w-1/3 bg-[#E7E7E7] rounded-lg items-center justify-center">

                    </View>
                </View>
                <View>
                    <Text className='text-lg font-semibold'>Finding the best legal expert for your case!</Text>
                </View>
            </View>



            <View className='flex flex-col items-start gap-1 w-4/5'>
                <Text className='text-neutral-500 font-normal'>Your query</Text>
                <View className='bg-[#e7e7e7] rounded-lg h-fit min-h-[100px] w-full flex flex-col justify-between p-2 px-4'>
                    <Text className='text-sm'>
                        I have a question regarding contracts.
                    </Text>

                    <View className='flex-row gap-2'>
                        <View className='py-2 px-4 rounded-full bg-[#00397b] flex items-center justify-center '>
                            <Text className='text-white'>Environmental</Text>
                        </View>
                        <View className='py-2 px-4 rounded-full bg-[#00397b] flex items-center justify-center '>
                            <Text className='text-white'>Land</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Matching

