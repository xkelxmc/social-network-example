import React from 'react';
import {TABS} from '../../../ustils/constatnts/navigation_const';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackScreens} from './HomeStack';
import {NewsStackScreens} from './NewsStack';
import {UsersStackScreen} from './UsersStack';
import {useTranslation} from 'react-i18next';
import {useTabsOptions} from '../ui/useTabsOptions';
import {SettingsScreen} from '../../../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const AuthorizedNavigation = () => {
  const {t} = useTranslation();
  const tabsScreenOptions = useTabsOptions();

  return (
    <Tab.Navigator screenOptions={tabsScreenOptions}>
      <Tab.Screen
        name={TABS.HOME}
        component={HomeStackScreens}
        options={{title: t('tabs.myPage')}}
      />
      <Tab.Screen
        name={TABS.NEWS}
        component={NewsStackScreens}
        options={{title: t('tabs.news')}}
      />
      <Tab.Screen
        name={TABS.USERS_LIST}
        component={UsersStackScreen}
        options={{title: t('tabs.usersList')}}
      />
      <Tab.Screen
        name={TABS.SETTINGS}
        component={SettingsScreen}
        options={{title: t('tabs.settings')}}
      />
    </Tab.Navigator>
  );
};
