import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MainLayout} from '../layouts/MainLayout';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {useAuthContext} from '../services/authService';

export const SettingsScreen = () => {
  const {t, i18n} = useTranslation();
  const {user, userData} = useAuthContext();

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <MainLayout scrollEnabled>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('en')}
          style={Styles.button}>
          <Text style={{color: '#fff'}}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage('ru')}
          style={Styles.button}>
          <Text style={{color: '#fff'}}>RU</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome {user.email}</Text>
        {userData && (
          <Text>
            {userData.name} {userData.surname}
          </Text>
        )}
      </View>

      <TouchableOpacity onPress={logout} style={Styles.button}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

const Styles = StyleSheet.create({
  button: {
    backgroundColor: '#2F80ED',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
