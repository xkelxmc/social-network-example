import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, View} from 'react-native';
import {useTheme} from '../services/themeService';

export const MainLayout = ({children, scrollEnabled, safeBottom}) => {
  const {isDarkMode} = useTheme();
  const Container = scrollEnabled ? ScrollView : View;
  return (
    <SafeAreaView
      style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1}}
      edges={safeBottom ? ['bottom', 'left', 'right'] : ['left', 'right']}>
      <Container
        style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1}}>
        {children}
      </Container>
    </SafeAreaView>
  );
};
