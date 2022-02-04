import React from 'react';
import {TABS} from '../../../ustils/constatnts/navigation_const';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreens} from './HomeStack';
import {NewsStackScreens} from './NewsStack';
import {UsersStackScreen} from './UsersStack';

export const AuthorizedNavigation = () => {
  return <TabScreens />;
};

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={TABS.HOME} component={HomeStackScreens} />
      <Tab.Screen name={TABS.NEWS} component={NewsStackScreens} />
      <Tab.Screen name={TABS.USERS_LIST} component={UsersStackScreen} />
    </Tab.Navigator>
  );
};
