import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '../layouts/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {
  CHANGE_PROFILE_SCREEN,
  CREATE_POST_SCREEN,
} from '../ustils/constatnts/navigation_const';
import {CheckBox} from '../components/CheckBox';
import {useTheme} from '../services/themeService';

export const UserProfileScreen = () => {
  const {t, i18n} = useTranslation();
  const {isDarkMode} = useTheme();
  const navigation = useNavigation();

  const goToChangeProfile = () => {
    navigation.navigate(CHANGE_PROFILE_SCREEN);
  };
  const goToAddPost = () => {
    navigation.navigate(CREATE_POST_SCREEN);
  };

  return (
    <MainLayout scrollEnabled>
      <View>
        <Text style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
          UserProfileScreen{' '}
          <Text style={{fontWeight: 'bold'}}>{t('app_name')}</Text>
        </Text>
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
        <Button title={'Go to change profile!'} onPress={goToChangeProfile} />
        <Button title={'Go to add post!'} onPress={goToAddPost} />
        <View style={{marginTop: 50, marginHorizontal: 20}}>
          <CheckBox text={'1. Безопастные области (Safe Area)'} checked />
          <CheckBox text={'2. Общай шаблон экрана'} checked />
          <CheckBox text={'3. Подключение иконок'} checked />
          <CheckBox
            text={'4. Кастомизирование шапки (Screen Options)'}
            checked
          />
          <CheckBox
            text={'5. Мультиязычность (Подключение локализации)'}
            checked
          />
          <CheckBox text={'6. Темная тема (Определение, изменение темы)'} />
        </View>
      </View>
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
