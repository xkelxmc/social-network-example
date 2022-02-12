import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {MainLayout} from '../layouts/MainLayout';

export const SignUpScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  return (
    <MainLayout safeBottom>
      <View>
        <Text>SignUpScreen</Text>
        <Button title={'Go to login!'} onPress={goToLogin} />
        <Button
          title={'Go to restore password!'}
          onPress={goToRestorePassword}
        />
      </View>
    </MainLayout>
  );
};
