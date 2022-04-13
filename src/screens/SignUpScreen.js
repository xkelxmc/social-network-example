import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {MainLayout} from '../layouts/MainLayout';
import {PRIMARY} from '../ustils/theme/light';
import auth from '@react-native-firebase/auth';

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <MainLayout safeBottom>
      <View style={styles.root}>
        <View style={styles.form}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
          <Button title={'Sign Up!'} onPress={signUp} />
        </View>
        <View>
          <Button title={'Go to login!'} onPress={goToLogin} />
          <Button
            title={'Go to restore password!'}
            onPress={goToRestorePassword}
          />
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    padding: 12,
    paddingTop: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 13,
    borderColor: PRIMARY,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 12,
  },
});
