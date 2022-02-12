import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

export const supportedLngs = ['en', 'ru'];

i18n.use(initReactI18next).init({
  resources,
  lng: RNLocalize.findBestAvailableLanguage(supportedLngs).languageTag,
  supportedLngs,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV === 'development',
});

export default i18n;
