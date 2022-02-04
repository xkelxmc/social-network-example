import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  USER_PROFILE_SCREEN,
  USERS_LIST_SCREEN,
} from '../../../ustils/constatnts/navigation_const';
import {UsersListScreen} from '../../../screens/UsersListScreen';
import {UserProfileScreen} from '../../../screens/UserProfileScreen';

const UsersStack = createNativeStackNavigator();

export const UsersStackScreen = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name={USERS_LIST_SCREEN} component={UsersListScreen} />
      <UsersStack.Screen
        name={USER_PROFILE_SCREEN}
        component={UserProfileScreen}
      />
    </UsersStack.Navigator>
  );
};
