import React from 'react';
import {TABS} from '../../../ustils/constatnts/navigation_const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const getTabsOptions = () => {
  return ({route}) => ({
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === TABS.HOME) {
        iconName = focused ? 'account-box' : 'account-box-outline';
      } else if (route.name === TABS.NEWS) {
        iconName = focused ? 'post' : 'post-outline';
      } else if (route.name === TABS.USERS_LIST) {
        iconName = focused ? 'account-multiple' : 'account-multiple-outline';
      }

      // You can return any component that you like here!
      return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
    },
    tabBarActiveTintColor: '#2F80ED',
    tabBarInactiveTintColor: 'gray',
  });
};
