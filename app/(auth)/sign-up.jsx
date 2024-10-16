import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Link, router } from 'expo-router'

import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import {createUser} from '../../lib/appwrite'

const SignUp = () => {
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:"",
    })
    const [isSubmitting, setisSubmitting] = useState(false);
    const submit = async () =>{
      if(!form.username || !form.email || !form.password){
        Alert.alert('Error', 'Please fill all the fields');
      }
      setisSubmitting(true);

      try{
      const result = await createUser(form.email, form.password, form.username);


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
        Sign up to ChatSphere
        </Text>

        <FormField
        title="Username"
        value={form.username}
        handleChangeText={(e)=>setForm({...form,username:e})}
        otherStyle="mt-10"
        />


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
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-white font-fregular">
            Have an account already?
          </Text>
        <Link href="/sign-in" className="text-lg font-fsemibold text-black-100">Sign In</Link>
        </View>
        </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default SignUp