import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../../../ustils/constatnts/navigation_const';
import {SignUpScreen} from '../../../screens/SignUpScreen';
import {LoginScreen} from '../../../screens/LoginScreen';
import {RestorePasswordScreen} from '../../../screens/RestorePasswordScreen';
import {useScreenOptions} from '../ui/useScreenOptions';
import {useTranslation} from 'react-i18next';

const AuthStack = createNativeStackNavigator();

export const NotAuthorizedNavigation = () => {
  const screenOptions = useScreenOptions();
  const {t} = useTranslation();

  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen
        name={SIGN_UP_SCREEN}
        component={SignUpScreen}
        options={{
          title: t('screens.authStack.signUp.title'),
        }}
      />
      <AuthStack.Screen
        name={RESTORE_PASSWORD_SCREEN}
        component={RestorePasswordScreen}
        options={{
          title: t('screens.authStack.restorePassword.title'),
        }}
      />
      <AuthStack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{title: t('screens.authStack.login.title')}}
      />
    </AuthStack.Navigator>
  );
};
