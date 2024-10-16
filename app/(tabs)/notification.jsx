import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';  // You can use icons for additional features, like clearing notifications

const Notifications = () => {
  // Example notification data
  const notifications = [
    {
      id: 1,
      user: 'Ishowspeed',
      avatar: 'https://static.wikia.nocookie.net/ishowspeed/images/4/4c/Speed.jpg/revision/latest?cb=20240603080538',  // Avatar of the user sending the notification
      message: 'Ishowspeed liked your photo.',
      time: '2m ago',
    },
    {
      id: 2,
      user: 'Malupiton',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyXwXV91FJj9w26dpfnvHgt2P9r1hRE2EKg&s',  // Avatar of the user sending the notification
      message: 'Malupiton commented on your post.',
      time: '10m ago',
    },
    {
      id: 3,
      user: 'Onic Kaili',
      avatar: 'https://i.ytimg.com/vi/sUWLn4e9lp8/hqdefault.jpg',  // Avatar of the user sending the notification
      message: 'Onic Kaili sent you a friend request.',
      time: '1h ago',
    },
    {
      id: 4,
      user: 'Lil Lusis',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N6LPBRpebMmyOOPTvjVsSM88CHu2If62fg&s',  // Avatar of the user sending the notification
      message: 'Lil Lusis like your photo',
      time: '15m ago',
    },
  ];

  // Render each notification
  const renderNotification = ({ item }) => (
    <TouchableOpacity className="flex-row items-center p-4 bg-white mb-2 rounded-lg">
      <Image
        source={{ uri: item.avatar }}
        className="w-12 h-12 rounded-full"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4">
        <Text className="text-sm font-semibold">{item.message}</Text>
        <Text className="text-xs text-gray-500">{item.time}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="ellipsis-horizontal" size={20} color="gray" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-lightpink-100">
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotification}
        ListHeaderComponent={() => (
          <View className="p-4">
            <Text className="text-lg font-fsemibold">Notifications</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;