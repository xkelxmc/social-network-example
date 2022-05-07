import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView, View} from 'react-native';
import {useTheme} from '../services/themeService';

export const MainLayout = ({children, scrollEnabled, safeTop, safeBottom}) => {
  const {isDarkMode} = useTheme();
  const {top, bottom} = useSafeAreaInsets();
  const Container = scrollEnabled ? ScrollView : View;
  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        flex: 1,
        paddingTop: safeTop ? top : 0,
        paddingBottom: safeBottom ? bottom : 0,
      }}
      edges={safeBottom ? ['bottom', 'left', 'right'] : ['left', 'right']}>
      <Container
        style={{backgroundColor: isDarkMode ? '#000000' : '#ffffff', flex: 1}}>
        {children}
      </Container>
    </SafeAreaView>
  );
};
