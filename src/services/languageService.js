import * as RNLocalize from 'react-native-localize';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';
import {supportedLngs} from './i18n';

export const useLanguage = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    const handleLocalizationChange = e => {
      i18n.changeLanguage(
        RNLocalize.findBestAvailableLanguage(supportedLngs).languageTag,
      );
    };
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, [i18n]);
};
