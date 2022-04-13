import React, {useLayoutEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CreatePostScreen = () => {
  const createNewPost = () => {
    console.log('create new post');
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={createNewPost}
          style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
          <MaterialCommunityIcons
            name={'checkbox-marked'}
            size={24}
            color={'#fff'}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <MainLayout>
      <Text>CreatePostScreen</Text>
    </MainLayout>
  );
};
