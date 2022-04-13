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
import {useScreenOptions} from '../ui/useScreenOptions';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreens = () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen
        name={USER_PROFILE_SCREEN}
        component={UserProfileScreen}
        options={{
          title: t('screens.homeStack.myPage.title'),
        }}
      />
      <HomeStack.Screen
        name={CREATE_POST_SCREEN}
        component={CreatePostScreen}
        options={{
          title: t('screens.homeStack.createPost.title'),
        }}
      />
      <HomeStack.Screen
        name={CHANGE_PROFILE_SCREEN}
        component={ChangeProfileScreen}
        options={{
          title: t('screens.homeStack.changeProfile.title'),
        }}
      />
    </HomeStack.Navigator>
  );
};
