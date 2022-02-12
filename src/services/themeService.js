import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {DARK_THEME, LIGHT_THEME} from '../ustils/constatnts/theme_const';

const ThemeContext = createContext({
  theme: LIGHT_THEME,
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    setTheme(colorScheme);

    const onChangeColorScheme = event => {
      console.log('onChangeColorScheme', event.colorScheme);
      setTheme(event.colorScheme);
    };
    const subscription = Appearance.addChangeListener(onChangeColorScheme);
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return {theme, setTheme, isDarkMode: theme === DARK_THEME};
};
