import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {MainLayout} from '../layouts/MainLayout';

export const RestorePasswordScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  const goToSignUp = () => {
    navigation.navigate(SIGN_UP_SCREEN);
  };

  return (
    <MainLayout safeBottom>
      <View>
        <Text>SignUpScreen</Text>
        <Button title={'Go to login!'} onPress={goToLogin} />
        <Button title={'Go to sign up!'} onPress={goToSignUp} />
      </View>
    </MainLayout>
  );
};
