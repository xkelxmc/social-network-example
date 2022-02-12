import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NEWS_SCREEN} from '../../../ustils/constatnts/navigation_const';
import {NewsScreen} from '../../../screens/NewsScreen';
import {useScreenOptions} from '../ui/useScreenOptions';
import {useTranslation} from 'react-i18next';

const NewsStack = createNativeStackNavigator();

export const NewsStackScreens = () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <NewsStack.Navigator screenOptions={screenOptions}>
      <NewsStack.Screen
        name={NEWS_SCREEN}
        component={NewsScreen}
        options={{title: t('screens.newsStack.news.title')}}
      />
    </NewsStack.Navigator>
  );
};
