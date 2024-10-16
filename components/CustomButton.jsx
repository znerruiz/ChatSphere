import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-primary rounded-xl min-h-[50px] w-[300px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50':''}`}
    disabled={isLoading}
    >
      <Text className={`text-lightpink-100 font-fsemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton