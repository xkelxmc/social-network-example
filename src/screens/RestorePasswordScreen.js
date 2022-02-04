import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../ustils/constatnts/navigation_const';

export const RestorePasswordScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };
  const goToSignUp = () => {
    navigation.navigate(SIGN_UP_SCREEN);
  };
  const goToRestorePassword = () => {
    navigation.navigate({name: RESTORE_PASSWORD_SCREEN, key: 1});
  };
  const goToRestorePassword2 = () => {
    navigation.navigate({name: RESTORE_PASSWORD_SCREEN, key: 2});
  };

  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title={'Go to login!'} onPress={goToLogin} />
      <Button title={'Go to sign up!'} onPress={goToSignUp} />
      <Button
        title={'Go to sign goToRestorePassword!'}
        onPress={goToRestorePassword}
      />
      <Button
        title={'Go to sign goToRestorePassword 2!'}
        onPress={goToRestorePassword2}
      />
    </View>
  );
};
