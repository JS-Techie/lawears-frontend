import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useQueryStore } from '@/stores/query'

const Matching = () => {
    const router = useRouter()
    const query = useQueryStore((state: any) => state.query)
    const [sessionId, setSessionId] = useState<string | null>(null)

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8000/ws/queries`)

        ws.onopen = () => {
            console.log("CLIENT : READY TO ACCEPT SESSION DETAILS")
        }

        ws.onmessage = (event) => {
            console.log("SESSION DATA RECEIVED : ", event.data)
            try {
                const data = JSON.parse(event.data)
                if (data && data.session_id) {
                    setSessionId(data.session_id)
                }
            } catch (error) {
                console.error("Error parsing WebSocket data:", error)
            }
        }

        ws.onerror = (error) => {
            console.log("ERROR OCCURRED WHILE RECEIVING SESSION DATA : ", error)
        }

        ws.onclose = () => {
            console.log('SESSION DETAILS WS CLOSED')
        }

        return () => {
            ws.close()
        }
    }, [])

    useEffect(() => {
        if (sessionId) {
            router.push({
                pathname: '/session/[session_id]',
                params: { session_id: sessionId }
                
            })
        }
    }, [sessionId, router])

    return (
        <View className='flex h-full w-full flex-col items-center justify-start bg-white py-2 space-y-6'>
            <View className='flex items-center justify-center'>
                <Image
                    source={require('@/assets/images/map.png')}
                    style={{ width: 300, height: 350 }}
                    contentFit='fill'
                />
            </View>

            <View className='flex flex-col gap-3 animate-pulse items-center justify-center'>
                <View className="flex-row w-4/5 gap-2 items-center justify-between">
                    <View className="h-2 w-1/3 bg-[#00397b] rounded-lg items-center justify-center" />
                    <View className="h-2 w-1/3 bg-[#CDDEFF] rounded-lg items-center justify-center" />
                    <View className="h-2 w-1/3 bg-[#E7E7E7] rounded-lg items-center justify-center" />
                </View>
                <View>
                    <Text className='text-lg font-semibold'>Finding the best legal expert for your case!</Text>
                </View>
            </View>

            <View className='flex flex-col items-start gap-1 w-4/5'>
                <Text className='text-neutral-500 font-cmedium'>Your query</Text>
                <View className='bg-[#e7e7e7] rounded-lg h-fit min-h-[100px] w-full flex flex-col justify-between p-2 px-4'>
                    <Text className='text-sm'>
                        {query.description}
                    </Text>
                    <View className='flex-row gap-2'>
                        <View className='py-2 px-4 rounded-full bg-[#00397b] flex items-center justify-center '>
                            <Text className='text-white'>Contract Drafting</Text>
                        </View>
                        <View className='py-2 px-4 rounded-full bg-[#00397b] flex items-center justify-center '>
                            <Text className='text-white'>Legal Advice</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Matching