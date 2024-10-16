import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';

import { icons } from '../../constants'

import SearchInput from '../../components/SearchInput';

const Home = () => {
  const stories = [
    { id: 1, image: images.ungart, name: "Istory ngart" },
    { id: 2, image: images.speed, name: "Ishowspeed" },
    { id: 3, image: images.bossing, name: "Bossing" },
    { id: 4, image: images.lillusis, name: "Lil Lusis" },
    { id: 5, image: images.kaili, name: "Onic Kaili" },
    
  ];

  return (
    <SafeAreaView className="bg-lightpink-100 flex-1">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="p-4">
            <View className="flex-row items-center">
            <Image
            source={images.ungart}
            className="w-10 h-10 rounded-full"
            resizeMode='cover'
            />
            <Text className="text-xl font-fsemibold mr-5">Ungart Makabugto</Text>

            </View>
            <Text className="text-l mt-3">Campus Crush</Text>
            
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDdpDr5gTW8VTZMCWdXACK_Csto_t8LJVMQ&s' }} // replace with actual image source
              className="w-full h-56 rounded-xl"
              resizeMode="cover"
            />
             </View>
             
        )}
        
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-1">
            {/* Top Header */}
            <View className="justify-between items-start flex-row mb-6">
              <View className="flex-row items-center">
                
                <Text className="text-2xl font-fsemibold text-primary">ChatSphere</Text>
                <Image
                source={icons.create}
                className="w-6 h-6 ml-36 mr-1"
                resizeMode='contain'
                
                />
                <Image
                source={icons.search}
                className="w-6 h-6"
                resizeMode='contain'
                />
                <Image
                source={icons.message}
                className="w-6 h-6 "
                resizeMode='contain'
                />
              </View>

            </View>
            <View className="flex-row items-center">
              <Image
              source={images.ungart}
              className="w-10 h-10 rounded-full"
              resizeMode="cover"
              />
        <TextInput
          placeholder="Unsay naa sa imong huna-huna?!!!"
          className="border border-gray-300 rounded-full px-9 py-2 text-sm"
        />
      </View>
            {/* Story Section */}
            <View className="flex-row items-center">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {stories.map((story) => (
                  <TouchableOpacity key={story.id} className="mr-2">
                    <Image
                      source={story.image}
                      className="w-16 h-16 rounded-full"
                      resizeMode="cover"
                    />
                    <Text className="text-xs text-center mt-1">{story.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;  