import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
} from '../ustils/constatnts/navigation_const';

export const SignUpScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate({name: RESTORE_PASSWORD_SCREEN, key: 1});
  };
  const goToRestorePassword2 = () => {
    navigation.navigate({name: RESTORE_PASSWORD_SCREEN, key: 2});
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'blue', flex: 1}}
      edges={['bottom', 'left', 'right']}>
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Text>SignUpScreen</Text>
        <Button title={'Go to login!'} onPress={goToLogin} />
        <Button
          title={'Go to restore password!'}
          onPress={goToRestorePassword}
        />
        <Button
          title={'Go to restore password2!'}
          onPress={goToRestorePassword2}
        />
      </View>
    </SafeAreaView>
  );
};
