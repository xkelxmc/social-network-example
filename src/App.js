import type {Node} from 'react';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Navigation} from './interface-adapters/navigation';

import './services/i18n';
import {useLanguage} from './services/languageService';
import {ThemeProvider, useTheme} from './services/themeService';

const App = () => {
  const {isDarkMode} = useTheme();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </>
  );
};

const AppContainer: () => Node = () => {
  useLanguage();

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppContainer;
