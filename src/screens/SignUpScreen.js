import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LOGIN_SCREEN,
  RESTORE_PASSWORD_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {MainLayout} from '../layouts/MainLayout';
import {PRIMARY} from '../ustils/theme/light';
import auth from '@react-native-firebase/auth';
import {userCollection} from '../interface-adapters/db/collections';

const FORM_INITIAL_VALUE = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  surname: '',
};

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState(FORM_INITIAL_VALUE);
  const [authState, setAuthState] = useState('default');
  const [error, setError] = useState(null);

  const onChange = name => text => {
    setForm({...form, [name]: text});
  };

  const goToLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  const goToRestorePassword = () => {
    navigation.navigate(RESTORE_PASSWORD_SCREEN);
  };

  const checkFormComplete = () => {
    const {email, password, confirmPassword, name, surname} = form;
    return (
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword &&
      name.length > 0 &&
      surname.length > 0
    );
  };

  const signUp = () => {
    if (!checkFormComplete()) {
      return;
    }
    setAuthState('loading');
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(({user}) => {
        userCollection.doc(user.uid).set({
          email: form.email,
          name: form.name,
          surname: form.surname,
        });
        setAuthState('success');
        setForm(FORM_INITIAL_VALUE);
        console.log('User account created & signed in!');
      })
      .catch(err => {
        setAuthState('error');
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        setError(err);
      });
  };

  return (
    <MainLayout safeBottom>
      <View style={styles.root}>
        <View style={styles.form}>
          <TextInput
            value={form.email}
            onChangeText={onChange('email')}
            placeholder="Email"
            style={styles.input}
            maxLength={100}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            editable={authState === 'default' || authState === 'error'}
          />
          <TextInput
            value={form.password}
            onChangeText={onChange('password')}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            maxLength={100}
            autoCorrect={false}
            autoCapitalize={'none'}
            editable={authState === 'default' || authState === 'error'}
          />
          <TextInput
            value={form.confirmPassword}
            onChangeText={onChange('confirmPassword')}
            placeholder="Password Confirm"
            style={styles.input}
            secureTextEntry
            maxLength={100}
            autoCorrect={false}
            autoCapitalize={'none'}
            editable={authState === 'default' || authState === 'error'}
          />
          <TextInput
            value={form.name}
            onChangeText={onChange('name')}
            placeholder="Name"
            style={styles.input}
            maxLength={100}
            autoCorrect={false}
            editable={authState === 'default' || authState === 'error'}
          />
          <TextInput
            value={form.surname}
            onChangeText={onChange('surname')}
            placeholder="Surname"
            style={styles.input}
            maxLength={100}
            autoCorrect={false}
            editable={authState === 'default' || authState === 'error'}
          />
          <Button
            title={'Sign Up!'}
            disabled={
              !checkFormComplete() ||
              authState === 'success' ||
              authState === 'loading'
            }
            onPress={signUp}
          />
          {authState === 'loading' && (
            <View style={{justifyContent: 'center'}}>
              <ActivityIndicator />
            </View>
          )}
          {authState === 'error' && <Text style={{color: 'red'}}>{error}</Text>}
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
