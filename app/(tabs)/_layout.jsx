import { View, Text, Image } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View classname="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 30, height: 30, tintColor: color }}
        
      />
      <Text classname={`${focused ? 'font-fsemibold' : 'font-fregular'} text-xs`} style={{color: color}}>
      {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
   <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#db2777',
          tabBarInactiveTintColor: 'CDCDE0',
          tabBarStyle: {
            backgroundColor: '#FFE4E1',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 70,
            
          }
        }}
      >
      <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
      />  
       <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
      />  
       <Tabs.Screen 
          name="watch"
          options={{
            title: 'Watch',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.watch}
                color={color}
                name="Watch"
                focused={focused}
              />
            )
          }}
      />  
        <Tabs.Screen 
          name="notification"
          options={{
            title: 'Notification',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.notification}
                color={color}
                name="Notify"
                focused={focused}
              />
            )
          }}
      />  
       <Tabs.Screen 
          name="menu"
          options={{
            title: 'Menu',
            headerShown: false,
            tabBarIcon: ({color, focused }) => (
              <TabIcon 
                icon={icons.menu}
                color={color}
                name="Menu"
                focused={focused}
              />
            )
          }}
      />  
      </Tabs>   
   </>
  )
}

export default TabsLayout