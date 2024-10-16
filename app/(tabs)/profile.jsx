import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { icons } from '../../constants'

const Profile = () => {
  const userPosts = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDdpDr5gTW8VTZMCWdXACK_Csto_t8LJVMQ&s', caption: "Set as covered photo" },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktbKifwQmdrfnpPwxuJX8gB_WoAH0ZDbB9g&s', caption: "Fun with friends" },
  ];

  const userFriends = [
    { id: 1, name: 'Ishowspeed', image: 'https://static.wikia.nocookie.net/ishowspeed/images/4/4c/Speed.jpg/revision/latest?cb=20240603080538' },
    { id: 2, name: 'Malupiton', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyXwXV91FJj9w26dpfnvHgt2P9r1hRE2EKg&s' },
    { id: 3, name: 'Onic Kaili', image: 'https://i.ytimg.com/vi/sUWLn4e9lp8/hqdefault.jpg' },
    { id: 4, name: 'Lil Lusis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N6LPBRpebMmyOOPTvjVsSM88CHu2If62fg&s' },
  ];

  const userPhotos = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMp3-sDYQ-rzhbeIYdaFJ3VVu8ynZd2jUEA&s' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTPA17-7ROHtxjAnvANbf6aTso-bKTHsagQ&s' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFH5KrYHFSO2XAk5WPoR9Ff6OneOHWO7rCOQ&s' },
  ];

  const renderHeader = () => (
    <>
      {/* Profile Header Section */}
      <View>
        {/* Cover Photo */}
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDdpDr5gTW8VTZMCWdXACK_Csto_t8LJVMQ&s' }} // Cover photo
          className="w-full h-48"
          resizeMode="cover"
        />
        {/* Profile Photo */}
        <View className="items-center mt-[-40px]">
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }} // Profile photo
            className="w-32 h-32 rounded-full border-4 border-white"
            resizeMode="cover"
          />
        </View>
        {/* User Info */}
        <View className="mt-4 items-center">
          <Text className="text-2xl font-fsemibold">Ungart Makabugto</Text>
          <Text className="text-sm text-gray-500">100 Friends • 50 Followers</Text>
          {/* Profile Actions */}
          <View className="flex-row mt-4 space-x-2">
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-md">
              <Text className="text-white font-fregular">Add Story</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-300 px-4 py-2 rounded-md">
              <Text className="text-black font-fregular">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-fsemibold">About</Text>
        <Text className="text-sm text-gray-600 mt-2">
          Lives in City • Works at Company • Studied at University
        </Text>
      </View>

      {/* Photos Section */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-fsemibold">Photos</Text>
        <View className="flex-row mt-2">
          {userPhotos.map((photo) => (
            <Image
              key={photo.id}
              source={{ uri: photo.image }}
              className="w-24 h-24 mr-2 rounded-lg"
              resizeMode="cover"
            />
          ))}
        </View>
      </View>

      {/* Friends Section */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-fsemibold">Friends</Text>
        <View className="flex-row mt-2">
          {userFriends.map((friend) => (
            <View key={friend.id} className="mr-4 items-center">
              <Image
                source={{ uri: friend.image }}
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
              />
              <Text className="text-sm mt-1">{friend.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView className="flex-1 bg-lightpink-100">
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mt-4 px-4">
            <Image
              source={{ uri: item.image }}
              className="w-full h-60 rounded-lg"
              resizeMode="cover"
            />
            <Text className="mt-2 text-sm">{item.caption}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};

export default Profile;