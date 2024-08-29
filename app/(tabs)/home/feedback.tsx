import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FeedbackSheet: React.FC = () => {
  const [satisfaction, setSatisfaction] = useState<'Yes' | 'No' | null>(null);
  const [feedback, setFeedback] = useState('');

  const router = useRouter()

  const handleSubmit = () => {
    console.log('Satisfaction:', satisfaction);
    console.log('Feedback:', feedback);
    router.replace('/home')

  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-xl font-semibold mb-6">
          Are you satisfied with the consult?
        </Text>
        
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity 
            className={`flex-row items-center justify-center w-[48%] py-3 rounded-full ${
              satisfaction === 'Yes' ? 'bg-green-100 border border-green-500' : 'bg-gray-100'
            }`}
            onPress={() => setSatisfaction('Yes')}
          >
            <Ionicons 
              name={satisfaction === 'Yes' ? 'checkmark-circle' : 'checkmark-circle-outline'} 
              size={24} 
              color={satisfaction === 'Yes' ? '#22c55e' : '#9ca3af'} 
            />
            <Text className={`ml-2 ${satisfaction === 'Yes' ? 'text-green-500' : 'text-gray-500'}`}>Yes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className={`flex-row items-center justify-center w-[48%] py-3 rounded-full ${
              satisfaction === 'No' ? 'bg-red-100 border border-red-500' : 'bg-gray-100'
            }`}
            onPress={() => setSatisfaction('No')}
          >
            <Ionicons 
              name={satisfaction === 'No' ? 'alert-circle' : 'alert-circle-outline'} 
              size={24} 
              color={satisfaction === 'No' ? '#ef4444' : '#9ca3af'} 
            />
            <Text className={`ml-2 ${satisfaction === 'No' ? 'text-red-500' : 'text-gray-500'}`}>No</Text>
          </TouchableOpacity>
        </View>
        
        <Text className="text-sm text-gray-600 mb-2">Add feedback</Text>
        <TextInput
          className="bg-gray-100 p-4 rounded-lg mb-6"
          placeholder="Once upon a time there was a potato in a magical land"
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        
        <TouchableOpacity 
          className="bg-blue-900 py-4 rounded-lg"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center font-semibold">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FeedbackSheet;