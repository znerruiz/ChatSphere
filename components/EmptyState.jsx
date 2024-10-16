import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'

import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode='contain'/>

      <Text className="font-fregular text-sm text-primary">
        {title}
       </Text>
       <Text className="text-xl text-center font-fsemibold  text-primary mt-2">
        {subtitle}
       </Text>

      <CustomButton
       title="Create Video"
       handlePress={() => router.push('/create')}
        containerStyles="w-full my-5"
       />
    </View>
  )
}

export default EmptyState