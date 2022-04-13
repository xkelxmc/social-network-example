import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  RESTORE_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {MainLayout} from '../layouts/MainLayout';
import {PRIMARY} from '../ustils/theme/light';
import auth from '@react-native-firebase/auth';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () => {
    navigation.navigate(SIGN_UP_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login successful!');
      })
      .catch(error => {
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
          <Button title={'Login!'} onPress={login} />
        </View>
        <View>
          <Button title={'Go to sign up!'} onPress={goToSignUp} />
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
