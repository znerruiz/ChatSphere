import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Stack,SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';



SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const[fontsLoaded, error] = useFonts({
        "Foldit-SemiBold": require("../assets/Fonts/Foldit-SemiBold.ttf"),
        "Foldit-ExtraLight": require("../assets/Fonts/Foldit-ExtraLight.ttf"),
        "Foldit-Light": require("../assets/Fonts/Foldit-Light.ttf"),
        "Foldit-Regular": require("../assets/Fonts/Foldit-Regular.ttf"),
        "Foldit-Black": require("../assets/Fonts/Foldit-Black.ttf"),
        "Foldit-Thin": require("../assets/Fonts/Foldit-Thin.ttf"),
        "Foldit-ExtraBold": require("../assets/Fonts/Foldit-ExtraBold.ttf"),
        "Foldit-Medium": require("../assets/Fonts/Foldit-Medium.ttf"), 
    });
    useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
      
    return (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{headrShown:false}} />
            <Stack.Screen name="(auth)" options={{headrShown:false}} />
        </Stack>
    )

}

export default MainLayout