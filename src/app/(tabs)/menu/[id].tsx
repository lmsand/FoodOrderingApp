import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams() // hook imported from expo router
  return (
    <View>
      <Stack.Screen options={{ title: 'Details' }} />

      <Text style={{fontSize: 20}}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen
