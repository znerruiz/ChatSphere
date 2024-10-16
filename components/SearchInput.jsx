import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'
import images from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setsetshowPassword] = useState(false)
  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-primary rounded-2xl focus:border-mistyrose-100 items-center  flex-row space-x-4">
        <TextInput
        className="text-base mt-0.5 text-white flex-1 font-fregular"
        value={value}
        placeholder="Pangitaa imong video nga ganahan"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password'&& !showPassword}
        {...props}
        />
        <TouchableOpacity>
        <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode='contain'
        />
        </TouchableOpacity>
      
      </View>
  )
}

export default SearchInput