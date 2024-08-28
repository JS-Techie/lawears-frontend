import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { useNotificationStore } from '@/stores/notification';
import apiRequest from '@/api';
import { Ionicons } from '@expo/vector-icons';

const AdvocateQueryPage = () => {
  const router = useRouter();
  const notification = useNotificationStore((state: { notification: any; }) => state.notification);

  const queryId = notification?.query_id || '10001';
  const queryDescription = notification?.description || 'Once upon a time there was a potato in a magical land';
  const queryTypes = notification?.query_types || ['Environmental', 'Land'];

  const handleQueryAcceptance = async () => {
    try {
      const response = await apiRequest(`/query/accept/${queryId}`, 'PATCH', {} , {},true);
      console.log('Query accepted successfully:', response);
      router.push({
        pathname: '/session/[session_id]',
        params: { session_id: response.data.session_id }
    })
      // Handle successful acceptance
    } catch (error) {
      console.error('Failed to accept query:', error);
    }
  };

  const handleQueryRejection = () => {
    router.push('/advocate/(auth)/(tabs)/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-white items-center">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 px-6">
    
 

        {/* Query ID */}
        <View className="items-center mb-6">
          <Text className="text-2xl font-bold">Query ID</Text>
          <Text className="text-gray-400">{queryId}</Text>
        </View>

        {/* Query Card */}
        <View className="bg-gray-100 rounded-xl p-4 mb-8 flex flex-col items-center">
          <Text className="text-gray-400 mb-2">Query</Text>
          <Text className="mb-4">{queryDescription}</Text>
          <View className="flex-row flex-wrap">
            {queryTypes.map((type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
              <View key={index} className="bg-[#00397B] rounded-full px-3 py-1 mr-2 mb-2">
                <Text className="text-white text-xs">{type}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between w-11/12 items-center">
          <TouchableOpacity
            onPress={handleQueryAcceptance}
            className="flex-row items-center justify-center border-2 border-[#BEEBDC] rounded-sm py-2 px-6"
          >
            <Ionicons name="checkmark" size={28} color="#BEEBDC" />
            <Text className="ml-2 ">Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleQueryRejection}
            className="flex-row items-center justify-center border-2 border-[#FACFDC] rounded-sm py-2 px-6"
          >
            <Ionicons name="close" size={28} color="#FACFDC" />
            <Text className="ml-2 ">Reject</Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default AdvocateQueryPage;