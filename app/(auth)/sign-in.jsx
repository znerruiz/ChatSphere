import { View, Text, ScrollView, Image, Alert} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Link, router } from 'expo-router'

import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'


import {signIn} from '../../lib/appwrite' 

const SignIn = () => {
    const [form, setForm] = useState({
        email:'',
        password:'',
    })
    const [isSubmitting, setisSubmitting] = useState(false)
    const submit = async () =>{
      if(!form.email || !form.password){
        Alert.alert('Error', 'Please fill all the fields');
      }
      setisSubmitting(true);

      try{
      await signIn(form.email, form.password);

      router.replace("/home");
      }catch (error) {
        Alert.alert("Error", error.message);
      }finally {
        setisSubmitting(false);
      }

    };
  return (
  <SafeAreaView className="bg-lightpink-100 h-full">
    <ScrollView>
        <View className="w-full justify-center items-center min-h-[83vh] px-4">
        <Image source={images.logo}
        className="w-[350px] h-[250px]"
        resizeMode="contain"
        />
        <Text className="text-2xl text-center text-black text-semibold font-fsemibold">
        Log in to ChatSphere
        </Text>

        <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e)=>setForm({...form,email:e})}
        otherStyle="mt-7"
        keyboardType="email-address"
        />

<FormField
        title="Password"
        value={form.password}
        handleChangeText={(e)=>setForm({...form,password:e})}
        otherStyle="mt-7"
        />

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-white font-fregular">
            Don't have account?
          </Text>
        <Link href="/sign-up" className="text-lg font-fsemibold text-black-100">Sign Up</Link>
        </View>
        </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default SignIn