import { StatusBar } from 'expo-status-bar'; 
import { Image, ScrollView, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';  
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <View className="relative flex-1">
    <ImageBackground
      source={images.background}  
      className="absolute top-0 left-0 w-full h-full bg-cover" 
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerClassName="h-full">
          <View className="w-full justify-center items-center min-h-[70vh] px-4">
            <Image 
              source={images.logo}
              className="w-[300px] h-[250px] p-4 m-2"
              resizeMode="cover"
            />
            <View className="relative mt-5">
              <Text className="text-xl text-white font-bold text-center">
                Welcome to {''}
                <Text className="text-black font-fsemibold">ChatSphere!</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px] absolute bottom-2 right-8"
                resizeMode="contain"
              />     
            </View>
            <Text className="text-sm font-regular text-gray mt-2 text-center">
              Stay connected with friends and family through seamless real-time messaging and multimedia sharing. 
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              contentContainerStyle="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light'/>
      </SafeAreaView>
    </ImageBackground>
    </View>
  );
}
