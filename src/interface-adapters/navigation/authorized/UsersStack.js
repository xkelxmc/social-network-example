import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  USER_PROFILE_SCREEN,
  USERS_LIST_SCREEN,
} from '../../../ustils/constatnts/navigation_const';
import {UsersListScreen} from '../../../screens/UsersListScreen';
import {UserProfileScreen} from '../../../screens/UserProfileScreen';
import {useScreenOptions} from '../ui/useScreenOptions';
import {useTranslation} from 'react-i18next';

const UsersStack = createNativeStackNavigator();

export const UsersStackScreen = () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <UsersStack.Navigator screenOptions={screenOptions}>
      <UsersStack.Screen
        name={USERS_LIST_SCREEN}
        component={UsersListScreen}
        options={{
          title: t('screens.usersStack.usersList.title'),
        }}
      />
      <UsersStack.Screen
        name={USER_PROFILE_SCREEN}
        component={UserProfileScreen}
        options={{
          title: t('screens.usersStack.userPage.title'),
        }}
      />
    </UsersStack.Navigator>
  );
};
