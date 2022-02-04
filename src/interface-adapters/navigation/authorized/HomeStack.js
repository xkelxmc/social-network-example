import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHANGE_PROFILE_SCREEN,
  CREATE_POST_SCREEN,
  USER_PROFILE_SCREEN,
} from '../../../ustils/constatnts/navigation_const';
import {UserProfileScreen} from '../../../screens/UserProfileScreen';
import {CreatePostScreen} from '../../../screens/CreatePostScreen';
import {ChangeProfileScreen} from '../../../screens/ChangeProfileScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={USER_PROFILE_SCREEN}
        component={UserProfileScreen}
        options={{
          title: 'Моя страница',
        }}
      />
      <HomeStack.Screen
        name={CREATE_POST_SCREEN}
        component={CreatePostScreen}
      />
      <HomeStack.Screen
        name={CHANGE_PROFILE_SCREEN}
        component={ChangeProfileScreen}
      />
    </HomeStack.Navigator>
  );
};
