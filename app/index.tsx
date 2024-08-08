import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button, TextInput } from 'react-native-paper'

const Homepage = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-cthin text-3xl">Homepage</Text>
        <Button mode='outlined'> 
          <Link href={'/signup'}>
              Press 
          </Link>     
        </Button>
        <Button mode='outlined'> 
          <Link href="/(tabs)/home">
              + Press
          </Link>     
        </Button>
        
    </View>
  )
}

export default Homepage
