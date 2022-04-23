import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
  const [authState, setAuthState] = useState('default');
  const [error, setError] = useState(null);

  const goToSignUp = () => {
    navigation.navigate(SIGN_UP_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  const login = () => {
    if (email?.length >= 8 && password?.length >= 8) {
      setAuthState('loading');
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setAuthState('success');
          console.log('Login successful!');
        })
        .catch(err => {
          setAuthState('error');
          setError(err.message);
        });
    } else {
      setAuthState('error');
      setError('Email and password mast have 8 or many characters');
    }
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
            maxLength={100}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            editable={authState === 'default' || authState === 'error'}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.input}
            maxLength={100}
            autoCorrect={false}
            autoCapitalize={'none'}
            editable={authState === 'default' || authState === 'error'}
            secureTextEntry
          />
          <Button
            title={'Login!'}
            onPress={login}
            disabled={authState === 'success' || authState === 'loading'}
          />
          {authState === 'loading' && (
            <View style={{justifyContent: 'center'}}>
              <ActivityIndicator />
            </View>
          )}
          {authState === 'error' && <Text style={{color: 'red'}}>{error}</Text>}
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
