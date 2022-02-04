import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NEWS_SCREEN} from '../../../ustils/constatnts/navigation_const';
import {NewsScreen} from '../../../screens/NewsScreen';

const NewsStack = createNativeStackNavigator();

export const NewsStackScreens = () => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name={NEWS_SCREEN} component={NewsScreen} />
    </NewsStack.Navigator>
  );
};
