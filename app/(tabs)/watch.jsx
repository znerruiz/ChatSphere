import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants/';

import { icons } from '../../constants'

import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';


const Watch = () => {
    const { data: posts, refetch } = useAppwrite(getAllPosts);

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
      setRefreshing(true);
      await refetch();
      setRefreshing(false);
    }

    console.log(posts)

  return (
    <SafeAreaView className="bg-lightpink-100 border-2 h-full">
     <FlatList
     data={posts}
    keyExtractor={(item) => item.$id}
     renderItem={({ item }) => (
    <VideoCard video={item}/>
  )}
  ListHeaderComponent={() => (
    <View className="my-6 px-4 space-y-1">
      <View className="justify-between items-start flex-row mb-6">
      <View className="flex-row items-center">

       <Text className="font-fregular text-2xl text-primary"> Watch</Text>
       <Image
        source={icons.profile}
        className="w-6 h-6 ml-52 mr-1"
        resizeMode='contain'
      />
      <Image
        source={icons.create}
        className="w-6 h-6 ml mr-1"
        resizeMode='contain'
      />
       </View>

      </View>

      <SearchInput/>


      <View className="w-full flex-1 pt-5 pb-8">
        <Text className="text-gray-100 text-lg font-fregular mb-3">
          Latest Videos 
        </Text>

        <Trending posts={[{ id: 1}, { id: 2}, { id: 3}] ??[]}/>
      </View>
       </View>
  )}
  ListEmptyComponent={() => (
    <EmptyState
    title="No Video Found"
    subtitle="Be the first one to upload a"
    />
  )}  
  refreshControl={
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
}
      />
    </SafeAreaView>
  )
}

export default Watch;