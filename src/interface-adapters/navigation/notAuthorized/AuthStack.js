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

const AuthStack = createNativeStackNavigator();

export const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AuthStack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
      <AuthStack.Screen
        name={RESTORE_PASSWORD_SCREEN}
        component={RestorePasswordScreen}
      />
      <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
