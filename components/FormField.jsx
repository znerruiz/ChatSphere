import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'


import { icons } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setsetshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-white font-fregular">{title}</Text>

      <View className="border-2 border-black-200 w-80 h-16 px-4 bg-primary rounded-2xl focus:border-mistyrose-100 items-center flex-row">
        <TextInput
        className="flex-1 text-white font-fsemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password'&& !showPassword}
        {...props}
        />

        {title === 'Password'&&(
            <TouchableOpacity onPress={()=>
                setsetshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye: icons.eyehide}
                className="w-6 h-6
                resizeMode='contain'
                "/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField