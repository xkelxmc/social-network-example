import {getGlobalScreenOptions} from './globalScreenOptions';
import {useTheme} from '../../../services/themeService';

export const useScreenOptions = () => {
  const {isDarkMode} = useTheme();
  return getGlobalScreenOptions(isDarkMode);
};
