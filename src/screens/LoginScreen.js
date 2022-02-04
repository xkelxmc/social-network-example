import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  RESTORE_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../ustils/constatnts/navigation_const';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const goToSignUp = () => {
    navigation.navigate(SIGN_UP_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title={'Go to sign up!'} onPress={goToSignUp} />
      <Button title={'Go to restore password!'} onPress={goToRestorePassword} />
    </View>
  );
};
